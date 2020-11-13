import React from "react";
import Herosearch from "./HeroSearch";

const Hero = () =>  {
    return (
    <div className ="hero">
        <div className ="hero-text-container">
        <div className ="hero-text">
        What will be your next adventure?
        </div>
<Herosearch />
        </div>
    
    </div>
    );
    
};

export default Hero;