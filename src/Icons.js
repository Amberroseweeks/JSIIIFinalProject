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
import Card from './Card.js'
const {PropTypes} = React;



const Icons = (props) => {
   
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: "#74A57F",
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`35px`}
      height={`35px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};



export default Icons;