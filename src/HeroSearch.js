import React from "react";
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
    <ul key="1">

  <div className="dropdown">
    <div className="dropbtn"><img src={kayakiconwhite} className="nav-icon" alt="icon"/>Kayaking</div>
    
    <div className="dropdown-content">
  
    <span className="icon-sort">
      <img src={hikingicon} className="card-icon" alt="icon" />Hiking
 <img src={bikingicon} className="card-icon" alt="icon" />Biking
<img src={kayakicon} className="card-icon" alt="icon" />Kayaking
<img src={rockclimbingicon} className="card-icon" alt="icon" />Rock Climbing
<img src={fishingicon} className="card-icon" alt="icon" />Fishing
<img src={touricon} className="card-icon" alt="icon" />Tours
<img src={campingicon} className="card-icon" alt="icon" />Camping
<img src={geocachingicon} className="card-icon" alt="icon" />Geocaching
<img src={museumicon} className="card-icon" alt="icon" />Museum
 <img src={horsebackridingicon} className="card-icon" alt="icon" />Horseback Riding
<img src={swimmingicon} className="card-icon" alt="icon" />Swimming
</span>
   
    </div>
    
  </div>
    <input className="form-field" type="text" placeholder="Where would you like to go?"></input>
    <div className="dropbtn">Search</div>
    </ul>
        </div>
        
       
        </div>

    );
};


export default Herosearch;