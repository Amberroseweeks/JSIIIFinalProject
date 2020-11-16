import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import ScenicHero from "./ScenicHero";
// import Card from "./Card";
import Restaurant from "../Rest"



const Scenic = () =>{
    return (
        <div >
    <Navbar />  
     
    <ScenicHero />
    
    
    <div className="container">
    <Restaurant />
    </div>
    
    </div>
    
      
      );
};

export default Scenic;