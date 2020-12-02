import React from "react";

// const {PropTypes} = React;



const ParkInfoIcons = (props) => {
  
   
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
    <div>
<div className="parkinfoiconlink">{props.name}</div>
<svg
      style={styles.svg}
      width={`95px`}
      height={`95px`}
      viewBox="0 0 1024 1024"
    >
       
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
    
    </div>


  );
};



export default ParkInfoIcons;