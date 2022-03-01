import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "../../styles/main.css";
import { CLEAR_MESSAGE } from "../../redux/constans/message";
import { delete_contact, get_all_contacts,get_contact_Count_pag, view_contact } from "../../redux/actions/contact";
import { loader } from "../../shared/elements";
import { extractDesk } from "../../shared/funs";
import myClassNames from 'classnames';


const Contacts = () => {
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: CLEAR_MESSAGE })

        // if (!isAuthentication()) {
        //     navigate("/admin/login")
        // }

    }, [])

    const [Count , setCount] = useState(0)
    const [Pages, setPages] = useState({ pages: ["", "", ""], currentPage: 1 })
    const [Contacts , setContacts] = useState(0)

    const dispatch = useDispatch() 
    const { t } = useTranslation();
    
    const { loading } = useSelector(state => state.loading)
    const { count_pag , all_contacts } = useSelector(state => state.contact)

   // const authorization = isAuthentication() ? { "Authorization": `bearer ${getCookie("token")}` } : [{ _id: "" }]
    const authorization = { "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWxlIjoic3VwZXJBZG1pbiIsImlhdCI6MTY0NTk3ODIzNiwiZXhwIjoxNjQ2NTgzMDM2fQ.hywA1096FdswW-rWOFgDU9pUa8SdFcfgV_MejtdoX3M"}
  //  const user = localStorage.getItem("user") ? getLocalStorage("user") : [{ _id: "" }]




    useEffect(() => {

        const skip = Pages.currentPage == 1 ? 0 : ((Pages.currentPage - 1) * limit)

             dispatch(get_contact_Count_pag({ filter : '{"name" : { "$ne": "xxxlxxx" }}' }  , authorization))
             dispatch(get_all_contacts({ filter : '{"name" : { "$ne": "xxxlxxx" }}' }  , authorization))
    }, [dispatch])

    useEffect(() => {
              setContacts(all_contacts)
              setCount(count_pag)
    }, [ count_pag , all_contacts])

 
    useEffect(() => {
        setPages((Pages) => {
            Pages.pages.length = Math.ceil(count_pag / limit)
            Pages.pages.fill("page")
            return { ...Pages, pages: Pages.pages }
        })
    }, [count_pag])


   const viewContact = (id) => {
      dispatch(view_contact(id , authorization))  
   }

   const deleteContact = (id) => {
       const conf = window.confirm(t("Are you sure"))
        if(conf){
            dispatch(delete_contact(id , authorization))
           
        }
   }
 

  


   
   const limit = 2
 

   const paginations = []
   const Pagination = () => {


       const currentPage = Pages.currentPage
       const pagesLength = Pages.pages.length


       if (pagesLength > 0) {

           if (currentPage == 1) {

               for (let pageid = 1; pageid <= pagesLength; pageid++) {
                   paginations.push(<li key={pageid}><a onClick={() => { setCurrentPags(pageid) }} className={myClassNames({ "active": pageid == currentPage })} href="#">{pageid}</a></li>)
                   if (pageid == 3) {
                       paginations.push(<li key="next"><a href="#" onClick={() => { setCurrentPags("next") }}>next</a></li>)
                       return
                   }
               }

           }
           else if (pagesLength > 0 && currentPage == pagesLength || currentPage == (pagesLength - 1) || currentPage == (pagesLength - 2)) {
               paginations.push(<li key="prev"><a href="#" onClick={() => { setCurrentPags("prev") }}>Prev</a></li>)

               for (let pageid = (pagesLength - 3); pageid <= pagesLength; pageid++) {
                   if (pageid > 0) {
                       paginations.push(<li key={pageid}><a onClick={() => { setCurrentPags(pageid) }} className={myClassNames({ "active": pageid == currentPage })} href="#">{pageid}</a></li>)
                   }
               }

           }
           else {
               paginations.push(<li key="prev"><a href="#" onClick={() => { setCurrentPags("prev") }}>Prev</a></li>)

               for (let pageid = (currentPage - 1); pageid <= pagesLength; pageid++) {
                   paginations.push(<li key={pageid}><a onClick={() => { setCurrentPags(pageid) }} className={myClassNames({ "active": pageid == currentPage })} href="#">{pageid}</a></li>)

                   if (pageid == currentPage + 2) {
                       paginations.push(<li key="next"><a href="#" onClick={() => { setCurrentPags("next") }}>Next</a></li>)

                       return
                   }
               }
           }
       }//end if


   }//end Pagination

   (() => {
       Pagination()
   })()

   const setCurrentPags = (current) => {
       if (current == "prev") setPages({ ...Pages, currentPage: Pages.currentPage - 1 })
       else if (current == "next") setPages({ ...Pages, currentPage: Pages.currentPage + 1 })
       else setPages({ ...Pages, currentPage: current })
   }
    return (

        <Fragment> 
            <main>

            {loading && loader()}


                {all_contacts && Contacts && Contacts.length > 0 &&

                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fullname</th>
                                    <th>Email</th>
                                    <th>phone</th>
                                    <th>Naissance</th>
                                    <th>Franchise</th>
                                    <th>NPA</th>
                                    <th>viewed</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                Contacts.map((contact, ci) => {
                                    return (
                                        <tr key={ci}>
                                            <td>{extractDesk(contact.fullname , 10)}</td>
                                            <td>{extractDesk(contact.email , 10)}</td>
                                            <td>{extractDesk(contact.phone , 10)}</td>
                                            <td>{extractDesk(contact.naissance , 10)}</td>
                                            <td>{extractDesk(contact.franchise , 10)}</td>
                                            <td>{extractDesk(contact.npa , 10)}</td>
                                            <td>{extractDesk(contact.viewed ? "yes" : "no" , 10)}</td>
                                            <td><button className="view" href="" onClick={() => {viewContact(contact._id)}}  >view</button>
                                             <button className="delete" href=""  onClick={() => {deleteContact(contact._id)}}  >delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                               
                             
                        
                           </tbody>
                        </table>

                    </div>

                }
               
                <div className="pagination">
                    <ul>
                        <li><a href="#">Prev</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>

                    </ul>
                </div>



            </main>
        </Fragment>
    );
}
export default Contacts;