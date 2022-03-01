import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myClassName from 'classnames';
import { isAuthentication, Logout } from '../../shared/auth';
import { getLocalStorage } from "../../shared/localStorage";
import { use } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/main.css";
import { CLEAR_MESSAGE } from "../../redux/constans/message";
import { get_user_Count } from "../../redux/actions/user";
import { delete_contact, get_contact, get_contact_Count, view_contact } from "../../redux/actions/contact";
import { getCookie } from "../../shared/cookie";
import { loader } from "../../shared/elements";
import { extractDesk } from "../../shared/funs";


const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: CLEAR_MESSAGE })

        if (!isAuthentication()) {
            navigate("/admin")
        }

    }, [])


    const [Contacts , setContacts] = useState(0)
    const [ContactN , setContactN] = useState(0)
    const [AdminN , setAdminsN] = useState(0)

    const dispatch = useDispatch() 
    const { t } = useTranslation();
    
    const { loading } = useSelector(state => state.loading)
    const { count : userN } = useSelector(state => state.user)
    const { count : contactN , contacts } = useSelector(state => state.contact)

   const authorization = isAuthentication() ? { "Authorization": `bearer ${getCookie("token")}` } : [{ _id: "" }]

    useEffect(() => {
        console.log("e");
        dispatch(get_user_Count( { filter : '{"name" : { "$ne": "xxxlxxx" }}' }  , authorization)) 
        dispatch(get_contact_Count( { filter : '{"name" : { "$ne": "xxxlxxx" }}' } , authorization))       
        dispatch(get_contact( { filter : '{"name" : { "$ne": "xxxlxxx" }}' , limit : 10} , authorization))       
    }, [dispatch])

    useEffect(() => {
       setAdminsN(userN)
       setContactN(contactN)
       setContacts(contacts)
    }, [userN , contactN , contacts])

 
   const viewContact = (id) => {
      dispatch(view_contact(id , authorization))  
   }

   const deleteContact = (id) => {
       const conf = window.confirm(t("Are you sure"))
        if(conf){
            dispatch(delete_contact(id , authorization))
           
        }
   }
 
    return (

        <Fragment> 
            <main>

            {loading && loader()}

                <div className="cardbox">

                    {AdminN && userN &&
                        <div className="card">
                            <div>
                                <span>{userN}</span>
                                <p>Users</p>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-user"></i>

                            </div>
                        </div>
                    }
                   


                   {ContactN && contactN &&
                        <div className="card">
                            <div>
                                <span>{ContactN}</span>
                                <p>Users</p>
                            </div>
                            <div className="icon">
                                <i className="fa-solid fa-user"></i>

                            </div>
                        </div>
                    }
                </div>


                {contacts && Contacts  &&

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




            </main>
        </Fragment>
    );
}
export default Main;