import React from "react";
import Layout from "../../components/Layout/Layout";
import Form from "../../components/form/Form";
import {Group} from "../../assets/Group.png";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage">
   
      <div className="main-container"> 
      <div className="left-container" style={{width: 724, height: 317.71, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
       <img className="image" src={Group}></img>
  <div className="inner-block" style={{textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Welcome to</div>
  <div className="inner-block" style={{textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Goodspace Communications</div>
</div>
      <div className="right-container"><Form/></div>
      </div>
     
    </div>
  );
};

export default HomePage;
