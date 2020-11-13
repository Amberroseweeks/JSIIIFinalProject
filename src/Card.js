import React from "react";
import icon from './JSIII-Graphics.svg';







const Card = (props) => {


const x = 5;
 

    return ( 
        
        <div className = "col-4 card">
            <img className = "card-image" src={props.image} alt="image"></img>
            <div className = "card-content-bg">
                <div className = "card-light-text">{props.address}</div>
                <div className = "card-title-text">{props.name}</div>
                <div className = "card-dark-subtext"> Lorem Ipsum</div>
                <div className = "card-icon-container">
                    <img src={icon} className="card-icon" alt="icon" />
                    <img src={icon} className="card-icon" alt="icon" />
                    <img src={icon} className="card-icon" alt="icon" />
                    <img src={icon} className="card-icon" alt="icon" />
                </div>
                
                <div className = "card-dark-subtext-centered">View Reviews</div>
                <div className = "arrow-down"></div>
                </div>
            
                <div className = "card-review-button"> <div className = "card-review-button-text">Write a Review</div></div>

        </div>
    )

}

export default Card;