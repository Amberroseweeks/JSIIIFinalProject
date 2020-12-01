import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";







const ReviewForm = (props) =>{

  const starOneStatus = ["EmptyStar"];
  let starTwoStatus = ["EmptyStar"];
  let starThreeStatus = ["EmptyStar"];
  let starFourStatus = ["EmptyStar"];
  
    const [reviews, setReviews] = useState([]);
    const value1 = () =>{
      starOneStatus.splice(starOneStatus.indexOf("EmptyStar"), 1, "FullStar")
      console.log(starOneStatus);
      let star = "FullStar";
      console.log("this works")
  }
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (formData) => {
        const newReview = {
          ...formData,
          stars: parseInt(formData.stars),
        };
        const response = await fetch(
          `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}/reviews.json`,
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

        <div className="starSelection-1" value="1" onClick={()=> value1(starOneStatus)}>

        {starOneStatus.map((star) => {

          let starValue = 2;
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
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
        <select className="activities" name="activities">

    <option value="#Activity1">#Activity1</option>
    <option value="#Activity2">#Activity2</option>
    <option value="#Activity3">#Activity3</option>
    <option value="#Activity4">#Activity4</option>


  </select>
  </div>
  <div className="review-upload-container">
  <input className="review-form-image-upload-button" type="file" name="reviewImage"  accept="image/x-png,image/jpeg,image/heic" hidden/>
        <label htmlFor="upload" className="review-form-image-upload-button" >Upload an image</label>
  </div>

      </form>
      </div>

      </div>

    )
    
}

export default ReviewForm;
