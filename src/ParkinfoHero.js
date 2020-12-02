import React from "react";


const ParkInfoHero = (props) =>  {
    return (
    <div className ="parkInfoHero" style={{ backgroundImage: `url(${props.image})` }}>
        
        <div className ="hero-text-container">
        <div className ="hero-text">
        {props.name}
        </div>
        <div className = "hero-subtext"> Discover others experiences or leave a review.</div>
        </div>
    
    </div>
    );
    
};

export default ParkInfoHero;