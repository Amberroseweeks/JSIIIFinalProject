import React from "react";
import icon from './JSIII-Graphics.svg';
import bikingicon from './ActivitiesIcons/biking-solid.svg';
import hikingicon from './ActivitiesIcons/walking-solid.svg';
import fishingicon from './ActivitiesIcons/fish-solid.svg';
import campingicon from './ActivitiesIcons/campground-solid.svg';
import rockclimbingicon from './ActivitiesIcons/rockclimbing-solid.svg';
import museumicon from './ActivitiesIcons/landmark-solid.svg';
import geocachingicon from './ActivitiesIcons/binoculars-solid.svg';
import horsebackridingicon from './ActivitiesIcons/horse-solid.svg';
import swimmingicon from './ActivitiesIcons/swimmer-solid.svg';
import kayakicon from './ActivitiesIcons/canoe-solid.svg';
import kayakiconwhite from './ActivitiesIcons/canoe-solid-white.svg';
import touricon from './ActivitiesIcons/map-signs-solid.svg';

const Herosearch = () => {
    return (
        
<div>
<div className = "hero-subtext"> Discover Delaware’s 17 state parks or leave a review to inform other adventure seekers.</div>
<div className="form-group">
    <ul>

  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn"><img src={kayakiconwhite} className="nav-icon" alt="icon"/>Kayaking</a>
    
    <div class="dropdown-content">
      {/* <span class ="dropdowncontainer"><a href="#"> <img src={icon} className="card-icon" alt="icon" />Hiking</a></span>
      <span class ="dropdowncontainer"><a href="#"><img src={icon} className="card-icon" alt="icon" />Biking</a></span>
      <span class ="dropdowncontainer"><a href="#"><img src={icon} className="card-icon" alt="icon" />Kayaking</a></span>
      <span class ="dropdowncontainer"><a href="#"> <img src={icon} className="card-icon" alt="icon" />Hiking</a></span>
      <span class ="dropdowncontainer"><a href="#"><img src={icon} className="card-icon" alt="icon" />Biking</a></span>
      <span class ="dropdowncontainer"><a href="#"><img src={icon} className="card-icon" alt="icon" />Kayaking</a></span> */}
      <a href="#"> <img src={hikingicon} className="card-icon" alt="icon" />Hiking</a>
      <a href="#"><img src={bikingicon} className="card-icon" alt="icon" />Biking</a>
      <a href="#"><img src={kayakicon} className="card-icon" alt="icon" />Kayaking</a>
      <a href="#"> <img src={rockclimbingicon} className="card-icon" alt="icon" />Rock Climbing</a>
      <a href="#"><img src={fishingicon} className="card-icon" alt="icon" />Fishing</a>
      <a href="#"><img src={touricon} className="card-icon" alt="icon" />Tours</a>
      <a href="#"> <img src={campingicon} className="card-icon" alt="icon" />Camping</a>
      <a href="#"><img src={geocachingicon} className="card-icon" alt="icon" />Geocaching</a>
      <a href="#"><img src={museumicon} className="card-icon" alt="icon" />Museum</a>
      <a href="#"><img src={horsebackridingicon} className="card-icon" alt="icon" />Horseback Riding</a>
      <a href="#"><img src={swimmingicon} className="card-icon" alt="icon" />Swimming</a>
   
    </div>
    
  </li>
    <input className="form-field" type="text" placeholder="Where would you like to go?"></input>
    <a href="javascript:void(0)" class="dropbtn">Search</a>
    </ul>
        </div>
        
       
        </div>

    );
};


export default Herosearch;