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
    let name = props.name;
  
    

    


    return ( 
        

        <div className = "card" >
            <img className = "card-image" src={props.image} alt="Delaware State Park"></img>
            <div className = "card-content-bg">
                <div className = "card-light-text">{props.address}</div>

                <Link to={`/Park/${props.id}`} name={props.name}>
                <div className = "card-title-text">{props.name}</div>
                </Link>
                {/* <Link to={{
                    pathname:`/Park/${props.id}`
                }} >
                <div className = "card-title-text">{props.name}</div>
                </Link> */}
                
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
                {/* <div className = "card-dark-subtext"></div>
                <div className = "card-dark-subtext-centered" onClick={()=> setOpen(!open)} >View Reviews</div>
                {open &&<Review  />}
                <Reviews id={props.id} />
                <div className = "card-review-button" onClick={()=> setOpenReviewForm(!openReviewForm)}> <div className = "card-review-button-text">Write a Review</div></div>
                {openReviewForm &&<ReviewForm />} */}
                
                </div>

        </div>
       
    )

}

export default Card;