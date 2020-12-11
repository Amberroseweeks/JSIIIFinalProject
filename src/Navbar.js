import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import icon from './JSIII-Graphics.svg';
import logo from './ActivitiesIcons/Delaware-State-Parks-Search-Logo.png';
import hamburgericon from './ActivitiesIcons/bars-solid.svg';


const Navbar = () => {
  const [open, setOpen] = useState(false);
    return (
    <div className ="navbar">
       <Link to="/"><img src={logo} width="120px"/></Link>{" "}      
       <span className="navbartext">
        <Link to="/Beaches">BEST BEACHES</Link>{" "}
      </span>
      <span className="navbartext">
        <Link to="/Camping">BEST CAMPING</Link>{" "}
      </span>
      <span className="navbartext">
        <Link to="/Scenic">THE MOST SCENIC</Link>{" "}
      </span>
      <span className="navbartext">
        <Link to="/TopFive">TOP 5 PARKS</Link>{" "}
      </span>

      <div className ="hamburgerMenu">
      <img src={hamburgericon} className="card-icon" alt="icon" onClick={()=> setOpen(!open)}/>
      {open && <div className="mobile-menu">
      <div className="mobilenavbartext">
        <Link to="/Beaches">BEST BEACHES</Link>{" "}
      </div>
      <div className="mobilenavbartext">
        <Link to="/Camping">BEST CAMPING</Link>{" "}
      </div>
      <div className="mobilenavbartext">
        <Link to="/Scenic">THE MOST SCENIC</Link>{" "}
      </div>
      <div className="mobilenavbartext">
        <Link to="/TopFive">TOP 5 PARKS</Link>{" "}
      </div>
      </div>}

      
      </div>
    </div>


    );
};

export default Navbar;