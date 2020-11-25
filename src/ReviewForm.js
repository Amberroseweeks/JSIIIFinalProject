import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@reach/router";
import Reviews from "./Reviews";
import Taxonomie from './Taxonomie.js';
import Icons from "./Icons.js";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";


let starOneStatus = ["EmptyStar"];
let starTwoStatus = ["EmptyStar"];
let starThreeStatus = ["EmptyStar"];
let starFourStatus = ["EmptyStar"];




const ReviewForm = (props) =>{


  
    const [reviews, setReviews] = useState([]);
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (formData) => {
        const newReview = {
          ...formData,
          stars: parseInt(formData.stars),
        };
        const response = await fetch(
          `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}reviews.json`,
          // `http://localhost:3000/restaurants/${props.restaurantId}/reviews`,
          {
            method: "POST",
            body: JSON.stringify(newReview),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const createdReview = await response.json();
        setReviews([...reviews, createdReview]);
      };

    return(


    
<div>




<div className="review-form-container">


        <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="review-input-container">
        <input className="review-form-name-input" placeholder="Name" name="text" ref={register} />
        <input className="review-form-text-input" name="text" placeholder="Tell us about your adventure." ref={register} />
        </div>


        <div className="review-stars-container">

        <div className="starSelection-1" value="1" >

        {starOneStatus.map((star) => {

          let starValue = 2;
                        return (
                           
                          <StarIcons icon={ICONS[star]}/>
                               
                            
                                
                            
                        )
                    })}
          </div>
          <div className="starSelection-2">
          {starTwoStatus.map((star) => {
            let starValue = 2
                        return (
                           
                          <StarIcons icon={ICONS[star]}/>
                               
                            
                                
                            
                        )
                    })}
                    </div>
            <div className="starSelection-3">
                    {starThreeStatus.map((star) => {
                      let starValue = 3
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
                        )
                    })}
            </div>
            <div className="starSelection-4">
            
                    {
                    
                    starFourStatus.map((star) => {
                      let starValue = 4
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
                        )
                    })}
            </div>
        {/* <StarIcons icon={ICONS[starStatus]} /> */}
        </div>
        <div className="review-stars-container">
        <p>What did you do?</p>
        <select id="activities" name="activities">

    <option value="#Activity1">#Activity1</option>
    <option value="#Activity2">#Activity2</option>
    <option value="#Activity3">#Activity3</option>
    <option value="#Activity4">#Activity4</option>


  </select>
  </div>
  <div className="review-upload-container">
  <input className="review-form-image-upload-button" type="file" name="reviewImage" id="upload" accept="image/x-png,image/jpeg,image/heic" hidden/>
        <label for="upload" className="review-form-image-upload-button" >Upload an image</label>
  </div>

      </form>
      </div>

      </div>

    )
    
}

export default ReviewForm;
