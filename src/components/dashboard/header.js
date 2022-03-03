import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthentication, Logout } from '../../shared/auth';
import { useDispatch, useSelector } from "react-redux";
import  "../../styles/header.css";
import { get_contact_Count_nav } from "../../redux/actions/contact";
import { getCookie } from "../../shared/cookie";
import { getLocalStorage } from "../../shared/localStorage";
import { ImageLink } from "../../shared/funs";


const Header = () => {
   const navigate = useNavigate();

   useEffect(() => { 
      if (!isAuthentication()) {
         navigate("/admin/login")
         return
     }

   }, [])


   const [Contact , setContact] = useState(0)

   const dispatch = useDispatch() 
   const { t, i18n } = useTranslation();

   const { count_nav  } = useSelector(state => state.contact)

   const authorization = isAuthentication() ? { "Authorization": `bearer ${getCookie("token")}` } : [{ _id: "" }]
   const user = localStorage.getItem("user") ? getLocalStorage("user") : [{ _id: "" }]

   useEffect(() => {
       dispatch(get_contact_Count_nav( { filter : '{ "viewed" : false }' } , authorization))       
   }, [dispatch])

   useEffect(() => {
      setContact(count_nav)
   }, [count_nav])



   const toggleSide = () => {
       document.querySelector("aside").classList.toggle("close")
   }

   const toggleSubMenu = (e) => {
      if (e.target.className.includes("fa-user"))
         e.target.parentElement.parentElement.classList.toggle("active")
      else e.target.parentElement.classList.toggle("active")
  }


   return (

      <Fragment>
         <aside className="close">

            <div className="brand">
                        <i className="fa-solid fa-database"></i>
                           <span>CP</span>
            </div>

            <ul className="menu">


               {/* <!-- normal menu-item --> */}

               <li>
                  <Link to="/admin">
                     <i className="fa-solid fa-chart-line"></i>
                     <span className="link_name">Dashboard</span>
                  </Link>

               </li>

               <li>
                  <Link to="/admin/contacts">
                   <i className="fa-solid fa-id-card"></i>
                   <span className="link_name">Contacts</span>
                  </Link>

               </li>

               {/* <!-- has sub menu inside menu-item --> */}

               <li className="has-sub-menu" onClick={(e) => {toggleSubMenu(e)}}>

                  <a href="#">
                     <i className="fa-solid fa-user"></i>
                     <span className="link_name">Admin</span>
                  </a>
                  <i className="fa-solid fa-chevron-down arrow"></i>

                  {/* <!-- sub menu --> */}
                  <ul className="sub-menu">
                     <li><a className="link_name" href="#">Admin</a></li>
                     <li><Link to="/admin/profile">Profile</Link></li>
                     <li><button className="dropdown-item" style={{all : "unset" , color : "#fff" , cursor : "pointer"}} onClick={() => {
                        Logout(() => {
                           navigate("/admin/login")
                        })
                     }}>{t("Logout")}</button></li>
                  </ul>

               </li>





               {/* <!-- admin avatar --> */}
               <li>
                  <div className="profile-details">

                     <div className="profile-content">
                        <img src={user && user.image && ImageLink(user.image._id)} alt="profileImg" />
                     </div>

                     <div className="name-job">
                        <div className="profile_name">{user.firstname}{" "}{user.lastname}</div>
                     </div>

                     <i className='fa-solid fa-arrow-right-from-bracket' onClick={() => {
                        Logout(() => {
                           navigate("/admin/login")
                        })
                     }}></i>

                  </div>
               </li>




            </ul>


         </aside>



         <header>
            <i className="fa-solid fa-list sw-menu" onClick={(e) => {toggleSide(e)}}></i>

            <div className="extra">



               <div className="notifications">
                     <i className="fa-solid fa-bell"></i>
                     <span>{Contact}</span>
               </div>


            </div>
         </header>
      </Fragment>
   );
}
export default Header;