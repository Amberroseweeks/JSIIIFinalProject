import React from "react";
import Reviews from "./Reviews";
import Taxonomie from './Taxonomie.js';
import Icons from "./Icons.js";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";

let activities = ["Hiking", "Kayaking", "Biking"];
const Review = (props) =>{

console.log(props.text);
    return (
<div>
    <div className="reviews-bg">


   <div className="review-container">
    <div className="review-image"> <img src="https://www.destateparks.com/wwwroot/images/parks/fortDuPont/FortDuPont-HERO.jpg" width="140px"></img></div>
    <div className="review-text-container">
    <div className="review-name">Lorem Ipsum{props.reviewnametest} <StarIcons icon={ICONS["FullStar"]} /><StarIcons icon={ICONS["FullStar"]} /><StarIcons icon={ICONS["FullStar"]} /><StarIcons icon={ICONS["FullStar"]} /></div>
    <div className="review-text">Some body text here. {props.text}</div>
    <div className="review-activity-icon-container">
    {activities.map((activity) => {
                        return (
                           
                               <Icons icon={ICONS[activity]} />
                            
                                
                            
                        )
                    })}
                    </div>
    </div>
    </div>
    <div className="review-border"></div>
    
    </div>
</div>
    )

}

export default Review;