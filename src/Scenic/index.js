import React from "react";


import Navbar from "../Navbar";
import ScenicHero from "./ScenicHero";

import Park from "../Rest"



const Scenic = () =>{
    return (
        <div >
    <Navbar />  
     
    <ScenicHero />
    
    
    <div className="container">
    <Park />
    </div>
    
    </div>
    
      
      );
};

export default Scenic;