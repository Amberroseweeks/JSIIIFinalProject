import React from "react";
import { Link } from "@reach/router";
import icon from './JSIII-Graphics.svg';


const Navbar = () => {
    return (
    <div class ="navbar">
       <Link to="/"><img src={icon} className="card-icon" alt="icon" /></Link>{" "}      
       <span class="navbartext">
        <Link to="/Beaches">BEST BEACHES</Link>{" "}
      </span>
      <span class="navbartext">
        <Link to="/Camping">BEST CAMPING</Link>{" "}
      </span>
      <span class="navbartext">
        <Link to="/Scenic">THE MOST SCENIC</Link>{" "}
      </span>
      <span class="navbartext">
        <Link to="/TopFive">TOP 5 PARKS</Link>{" "}
      </span>
    
    </div>
    );
};

// document.body.innerHTML = Navbar();
export default Navbar;