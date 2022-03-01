import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthentication, Logout } from '../../shared/auth';
import { useDispatch, useSelector } from "react-redux";
import  "../../styles/header.css";
import { get_contact_Count_nav } from "../../redux/actions/contact";
import { getCookie } from "../../shared/cookie";


const Header = (props) => {
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
      if (e.target.className.includes("bx-collection"))
         e.target.parentElement.parentElement.classList.toggle("active")
      else e.target.parentElement.classList.toggle("active")
  }



   return (

      <Fragment>
         <aside className="close">

            <div className="brand">
               <i className='bx bxl-c-plus-plus'></i>
               <span>CodingLab</span>
            </div>

            <ul className="menu">


               {/* <!-- normal menu-item --> */}

               <li>
                  <Link to="/admin">
                     <i className='bx bx-grid-alt'></i>
                     <span className="link_name">Dashboard</span>
                  </Link>

               </li>

               <li>
                  <Link to="/admin/contacts">
                     <i className='bx bx-grid-alt'></i>
                     <span className="link_name">Contacts</span>
                  </Link>

               </li>

               {/* <!-- has sub menu inside menu-item --> */}

               <li className="has-sub-menu" onClick={(e) => {toggleSubMenu(e)}}>

                  <a href="#">
                     <i className='bx bx-collection'></i>
                     <span className="link_name">Admin</span>
                  </a>
                  <i className='bx bxs-chevron-down arrow'></i>

                  {/* <!-- sub menu --> */}
                  <ul className="sub-menu">
                     <li><a className="link_name" href="#">Admin</a></li>
                     <li><Link to="/admin/profile">Profile</Link></li>
                     <li><Link to="/admin/admins">Admins</Link></li>
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
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="profileImg" />
                     </div>

                     <div className="name-job">
                        <div className="profile_name">Amraoui</div>
                        <div className="job">Web Desginer</div>
                     </div>

                     <i className='bx bx-log-out'></i>

                  </div>
               </li>




            </ul>


         </aside>



         <header>

            <i className='bx bx-menu sw-menu' onClick={(e) => {toggleSide(e)}}></i>

            <div className="extra">



               <div className="notifications">
                  <i className="far fa-bell"></i>
                  <span>{Contact}</span>
               </div>

               <div className="language">

                  <a href="#">{i18n.language || t("Language")}</a>
                  <i className="fa-solid fa-chevron-down"></i>

                  <ul>
                     <li onClick={() => {i18n.changeLanguage("en")}}  ><a href="#"  >{t("English")}</a> </li>
                     <li onClick={() => {i18n.changeLanguage("ar")}}  ><a href="#"  >{t("Arabic")}</a> </li>
                  </ul>

               </div>

               <div className="search-box">
                  <i className="fa fa-search"></i>
                  <div className="input-box">
                     <input type="text" placeholder="Search..." />
                  </div>
               </div>


            </div>
         </header>
      </Fragment>
   );
}
export default Header;