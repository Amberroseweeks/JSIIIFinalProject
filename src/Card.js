import React from "react";
import icon from './JSIII-Graphics.svg';

const Card = () => {
    return (
        <div className = "card">
            <div className = "card-image"></div>
            <div className = "card-content-bg">
                <div className = "card-light-text">Lorem Ipsum</div>
                <div className = "card-title-text">Lorem Ipsum</div>
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