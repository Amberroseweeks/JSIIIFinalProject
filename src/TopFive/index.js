import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import TopFiveHero from "./TopFiveHero";
// import Card from "./Card";
import Park from "../Rest"



const Camping = () =>{
    return (
        <div >
    <Navbar />  
     
    <TopFiveHero />
    
    
    <div className="container">
    <Park />
    </div>
    
    </div>
    
      
      );
};

export default Camping;