import React, { useState, useEffect } from "react";
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
import caretDown from './ActivitiesIcons/caret-down-solid.svg';
import Card from './Card';
import Search from './Search.js'
import Icons from './Icons.js';
import {ICONS} from './constants';

const Herosearch = () => {
  const [title, setTitle] = useState('')

  let searchTermValue = title
  const searchTerm = () => {
    console.log(searchTermValue)
    
  }
 

    return (
      
        
<div>

<div className = "hero-subtext"> Discover Delaware’s 17 state parks or leave a review to inform other adventure seekers.</div>
<div className="form-container">
  <div className="form-group">
    <ul key="1">

  <div className="dropdown">
    <div className="dropbtn">
      <div className="nav-icon-activity">
      <img src={kayakiconwhite} className="nav-icon" alt="icon"/>
        </div>
        <div className="nav-icon-caret-down">
        <img src={caretDown} className="nav-icon" alt="icon"/>
        </div>
        </div>
        
    
    <div className="dropdown-content">

    
      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={campingicon} alt="icon" /></div>Camping
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={fishingicon} alt="icon" /></div>Fishing
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon-small"><img src={geocachingicon} alt="icon" /></div>Geocaching
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon-small"><img src={hikingicon} alt="icon" /></div>Hiking
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={horsebackridingicon} alt="icon" /></div>Horseriding
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={kayakicon} alt="icon" /></div>Kayaking
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={museumicon} alt="icon" /></div>Museums
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={touricon} alt="icon" /></div>Tours
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={rockclimbingicon} alt="icon" /></div>Rockclimbing
        </div>
      </div>

      <div className="dropdowncontentrowcontainer">
        <div className="dropdowncontentrow">
          <div className="dropdowncontenticon"><img src={swimmingicon} alt="icon" /></div>Swimming
        </div>
      </div>
    </div>

    </div>
    


    </ul>
        
       
        
        <input  className="form-field" type="text" placeholder="Where would you like to go?" onChange={event => setTitle(event.target.value)} />
        <input type="submit" id="inputSearch" value="Search" class="searchButton" onClick={event => searchTerm(event)}/>
        </div>
    
        
        
        
    </div>
        </div>
        
    );
};


export default Herosearch;