import React from "react";

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