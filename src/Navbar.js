import React from "react";
import icon from './JSIII-Graphics.svg';


const Navbar = () => {
    return (
    <div class ="navbar">
       <img src={icon} className="card-icon" alt="icon" /> <span class="navbartext">BEACHES </span><span class="navbartext">MUSEUMS</span><span class="navbartext"> FISHING HUNTIN BOATING </span>
    
    </div>
    );
};

// document.body.innerHTML = Navbar();
export default Navbar;