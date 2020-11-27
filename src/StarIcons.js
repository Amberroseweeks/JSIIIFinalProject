import React from "react";
// const {PropTypes} = React;



const StarIcons = (props) => {
   
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: '#E8B618',
    },
  };

  return (

        <svg
        style={styles.svg}
        width={`30px`}
        height={`30px`}
        viewBox="0 0 1024 1024"
      >
        <path
          style={styles.path}
          d={props.icon}
        ></path>
      </svg>

    
  );
};



export default StarIcons;