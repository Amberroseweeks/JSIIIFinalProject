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

const Herosearch = (props) => {
  const [title, setTitle] = useState('')
console.log(props)


 

    return (
      
      <div className ="hero">
      <div className ="hero-text-container">
      <div className ="hero-text">
      What will be your next adventure?
      </div>

      </div>
  
 
<div>

<div className = "hero-subtext"> Discover Delaware’s 17 state parks or leave a review to inform other adventure seekers.</div>
<div className="form-container">
  <div className="form-group">
        <input  className="form-field" type="text" placeholder="Where would you like to go?" onChange={event => props.onChange(event.target.value)}/>
     
        </div>
    </div>
        </div>



        </div>
        
    );
};


export default Herosearch;