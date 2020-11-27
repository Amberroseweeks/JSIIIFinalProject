import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import CampingHero from "./CampingHero";
// import Card from "./Card";
import Park from "../Rest"



const Camping = () =>{
    return (
        <div >
    <Navbar />  
     
    <CampingHero />
    
    
    <div className="container">
    <Park />
    </div>
    
    </div>
    
      
      );
};

export default Camping;