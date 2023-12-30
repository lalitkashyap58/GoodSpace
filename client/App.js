import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const AppLayout=()=>{
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Layout/>} />
            </Routes>
      
     
    </Router>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);