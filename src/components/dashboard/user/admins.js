
import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { get_admins, get_user_Count, get_user_Count_pag } from "../../../redux/actions/user";
import { loader } from "../../../shared/elements";
import { extractDesk } from "../../../shared/funs";
import { CLEAR_MESSAGE } from "../../../redux/constans/message";
import myClassNames from 'classnames';
import { isAuthentication } from "../../../shared/auth";
import { getCookie } from "../../../shared/cookie";


const Admins = () => {
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: CLEAR_MESSAGE })

        if (!isAuthentication()) {
            navigate("/admin")
        }

    }, [])


    const [Admins , setAdmins] = useState([])
    const [Count , setCount] = useState(0)
    const [Pages, setPages] = useState({ pages: ["", "", ""], currentPage: 1 })

    const dispatch = useDispatch() 
    const { t } = useTranslation();
    
    const { loading } = useSelector(state => state.loading)
    const { admin_pag , admins} = useSelector(state => state.user)

    const authorization = isAuthentication() ? { "Authorization": `bearer ${getCookie("token")}` } : [{ _id: "" }]


    useEffect(() => {

        const skip = Pages.currentPage == 1 ? 0 : ((Pages.currentPage - 1) * limit)

             dispatch(get_user_Count_pag({ filter : '{"name" : { "$ne": "xxxlxxx" }}' }  , authorization))
             dispatch(get_admins({ filter : '{"name" : { "$ne": "xxxlxxx" }}' }  , authorization))
    }, [dispatch])

    useEffect(() => {
              setAdmins(admins)
              setCount(admin_pag)
    }, [ admin_pag , admins])


    useEffect(() => {
        setPages((Pages) => {
            Pages.pages.length = Math.ceil(admin_pag / limit)
            Pages.pages.fill("page")
            return { ...Pages, pages: Pages.pages }
        })
    }, [admin_pag])


 
   const deleteAdmin = (id) => {
     // dispatch(view_contact(id , authorization))  
   }

   const editAdmin = (id) => {
      
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


                {admins && Admins && Admins.length > 0  &&

                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>firstname</th>
                                    <th>lastname</th>
                                    <th>rule</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                Admins.map((admin, ai) => {
                                    return (
                                        <tr key={ai}>
                                            <td>{extractDesk(admin.firstname , 10)}</td>
                                            <td>{extractDesk(admin.lastname , 10)}</td>
                                            <td>{extractDesk(admin.rule , 10)}</td>
                                            <td><button className="view" href="" onClick={() => {editAdmin(admin._id)}}  >edit</button></td>
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
                        {paginations}
                    </ul>
                </div>



            </main>
        </Fragment>
    );
}
export default Admins;