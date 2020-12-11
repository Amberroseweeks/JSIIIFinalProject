import React, { useState, useEffect } from "react";
import Icons from "./Icons.js";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";

let activities = [];
const Review = (props) =>{
    const [open, setOpen] = useState(false);


    return (
<div>
    <div className="reviews-bg">
   <div className="review-container">
    <div className="review-image"> <img src={props.image} alt="Reviewer's experience" width="150px"></img></div>
    <div className="review-text-container">
    <div className="review-name">
    {props.stars}


    </div>
    <div className="review-text">{props.text}</div>
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