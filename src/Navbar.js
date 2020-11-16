import React from "react";
import icon from './JSIII-Graphics.svg';


const Navbar = () => {
    return (
    <div class ="navbar">
       <a href="http://localhost:3002/"><img src={icon} className="card-icon" alt="icon" /></a> <span class="navbartext"><a href="http://localhost:3002/Beaches">BEST BEACHES</a> </span><span class="navbartext"><a href="http://localhost:3002/Camping">BEST CAMPING</a> </span><span class="navbartext"><a href="http://localhost:3002/Scenic">THE MOST SCENIC</a> </span><span class="navbartext"><a href="http://localhost:3002/TopFive">TOP 5 PARKS</a> </span>
    
    </div>
    );
};

// document.body.innerHTML = Navbar();
export default Navbar;