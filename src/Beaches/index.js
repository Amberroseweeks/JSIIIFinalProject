import React from "react";

// import './App.css';
import Navbar from "../Navbar";
import BeachesHero from "./BeachesHero";
// import Card from "./Card";
import Park from "../Rest"



const Beaches = () =>{
    return (
        <div >
    <Navbar />  
     
    <BeachesHero>
    
    
    </BeachesHero>
    
    
    <div className="container">
    <Park />
    </div>
    
    </div>
    
      
      );
};

export default Beaches;