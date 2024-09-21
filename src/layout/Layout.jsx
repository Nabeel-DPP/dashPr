import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { SideBar } from "./SideBar";
// import Footer from "./Footer";

const Layout = () => {
  return (
    //I Add Wrapper Class Here 
    <div className="min-vh-100 wrapper">
      <SideBar/>
      <div className="page-wrapper">
      <Navbar />
      {/* <Footer /> */}
      <Outlet />
      </div>
      
       
      
      
    </div>
  );
};

export default Layout;
