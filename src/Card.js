import Icons from './Icons.js';
import {ICONS} from './constants';
import { Link } from "@reach/router";
import ParkInfo from "./ParkInfo";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Review from "./Review";
import React, { useState, useEffect } from "react";









const Card = (props) => {
    const [open, setOpen] = useState(false);
    const [openReviewForm, setOpenReviewForm] = useState(false);
    const [listofactivities, setActivities] = useState([]);
    let name = props.name;
  
    
    
    


    return ( 
        

        <div className = "card" >
            <img className = "card-image" src={props.image} alt="Delaware State Park"></img>
            <div className = "card-content-bg">
                <div className = "card-light-text">{props.address}</div>

                <Link to={`/Park/${props.id}`} state={{
                    name: props.name,
                    address: props.address,
                    image: props.image
                    }}>
                <div className = "card-title-text">{props.name}</div>
                </Link>
                
                <div className = "card-icon-container">
                    {props.activities.map((activity) => {
                        let activityFilter = activity.activity.replace(/\s/g, "");
                        return (
                            <a href={activity.URL}>
                                <Icons icon={ICONS[activityFilter]} />
                            </a>
                        )
                    })}
                </div>
                
                </div>

        </div>
       
    )

}

export default Card;