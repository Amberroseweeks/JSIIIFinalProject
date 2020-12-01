import React, { useState, useEffect } from "react";
import Icons from "./Icons.js";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";

let activities = ["Hiking", "Kayaking", "Biking"];
const Review = (props) =>{
    const [open, setOpen] = useState(false);


    return (
<div>
    <div className="reviews-bg">
   <div className="review-container">
    <div className="review-image"> <img src="https://www.destateparks.com/wwwroot/images/parks/fortDuPont/FortDuPont-HERO.jpg" alt="Reviewer's experience" width="140px"></img></div>
    <div className="review-text-container">
    <div className="review-name">Lorem Ipsum{props.text} 
    {props.stars}
    <StarIcons icon={ICONS["FullStar"] } />
    <StarIcons icon={ICONS["FullStar"]} />
    <StarIcons icon={ICONS["FullStar"]} />
    <StarIcons icon={ICONS["FullStar"]} />
    </div>
    <div className="review-text">text:{props.text}</div>
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