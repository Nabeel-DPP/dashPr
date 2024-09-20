import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
// import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
