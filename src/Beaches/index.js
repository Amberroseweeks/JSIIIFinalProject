import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import BeachesHero from "./BeachesHero";
// import Card from "./Card";
import Restaurant from "../Rest"



const Beaches = () =>{
    return (
        <div >
    <Navbar />  
     
    <BeachesHero>
    
    
    </BeachesHero>
    
    
    <div className="container">
    <Restaurant />
    </div>
    
    </div>
    
      
      );
};

export default Beaches;