import React from "react";
import icon from './JSIII-Graphics.svg';
import Taxonomie from './Taxonomie.js';
import Icons from './Icons.js';
import {ICONS} from './constants';








const Card = (props) => {


const x = 5;
 

    return ( 
        

        <div className = "col-4 card">
            <img className = "card-image" src={props.image} alt="image"></img>
            <div className = "card-content-bg">
                <div className = "card-light-text">{props.address}</div>
                <div className = "card-title-text">{props.name}</div>
                <div className = "card-icon-container">
                    {props.activities.map((activity) => {
                        let activityFilter = activity.activity.replace(/\s/g, "");
                        return (
                            <a href={activity.URL}>
                                <Icons icon={ICONS[activityFilter]} />
                            </a>
                        )
                    })}
                <div className = "card-dark-subtext"></div>
                </div>
                <div className = "card-dark-subtext-centered">View Reviews</div>
                
                </div>
            
                <div className = "card-review-button"> <div className = "card-review-button-text">Write a Review</div></div>

        </div>
    )

}

export default Card;