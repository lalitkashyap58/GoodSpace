// Navbar.js

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Vector from '../../assets/Vector.png';


const Navbar = () => {
  return (
    <div className="Navbar" style={{ background: 'rgba(255, 255, 255, 0.10)', backdropFilter: 'blur(9.90px)', justifyContent: 'center', alignItems: 'center'}}>
  <div className="Frame77" style={{flex: '1 1 0', alignSelf: 'stretch', paddingTop: 15.88, paddingBottom: 15.88, paddingLeft: 92, paddingRight: 1572, justifyContent: 'flex-start', alignItems: 'center'}}>
    <Link to="/">
    <img className="Vector" src={Vector} style={{width: 256, height: 56.24}}></img>
    </Link>
  </div>
</div>
  );
};

export default Navbar;
