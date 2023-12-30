// Layout.js

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.css"; 

const Layout = ({ children }) => {
  return (
    <>
      <div className="background-image">
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
