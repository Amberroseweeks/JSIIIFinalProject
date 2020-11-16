import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import CampingHero from "./CampingHero";
// import Card from "./Card";
import Restaurant from "../Rest"



const Camping = () =>{
    return (
        <div >
    <Navbar />  
     
    <CampingHero />
    
    
    <div className="container">
    <Restaurant />
    </div>
    
    </div>
    
      
      );
};

export default Camping;