import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import TopFiveHero from "./TopFiveHero";
// import Card from "./Card";
import Restaurant from "../Rest"



const Camping = () =>{
    return (
        <div >
    <Navbar />  
     
    <TopFiveHero />
    
    
    <div className="container">
    <Restaurant />
    </div>
    
    </div>
    
      
      );
};

export default Camping;