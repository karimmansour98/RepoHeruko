import React, { Fragment } from "react"
import "../styles/app.css"
import Header from "./dashboard/header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./dashboard/user/login";
import Main from "./dashboard/main";
import Profile from "./dashboard/user/profile";
import Contacts from "./dashboard/contact";
import Admins from "./dashboard/user/admins";
import Forgot from "./dashboard/user/forgot";
import Index from "./index/index";



const App = () => {

 
  return (

    <div className="app">
      <BrowserRouter>


        <Routes>

        <Route path="/*" element={<Index />} />
        

          <Route path="/admin/*" element={
            <Fragment>
              <Header />

              <Routes>
                <Route path="/" element={<Main />} />

                <Route path="/contacts" element={<Contacts />} />
                <Route path="/admins" element={<Admins />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>


            </Fragment>
          } />



      
       
          <Route path="/admin/forgot" element={<Forgot />} />
          <Route path="/admin/login" element={<Login />} />

          </Routes>
    

       
      </BrowserRouter>
    </div>

  );
}

export default App;
