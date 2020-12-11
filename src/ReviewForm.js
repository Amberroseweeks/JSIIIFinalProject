import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";
import Review from "./Review";




const ReviewForm = (props) =>{
  let activtiesAll = [];

  console.log(props.id)
  

  const starOneStatus = ["EmptyStar"];
  let starTwoStatus = ["EmptyStar"];
  let starThreeStatus = ["EmptyStar"];
  let starFourStatus = ["EmptyStar"];
  const [openform, setOpenForm] = useState(true);
  
    const [reviews, setReviews] = useState([]);
    const value1 = () => {
      starOneStatus.splice(starOneStatus.indexOf("EmptyStar"), 1, "FullStar")
      console.log(starOneStatus);
      let star = "FullStar";
      console.log("this works")
      console.log(1)
      return 1

  }
  const value2 = () =>{
    console.log("this works")
    console.log(2)
    return 2

}
const value3 = () =>{
  console.log(3)
  return 3

}
const value4 = () =>{

  console.log(4)
  return 4

}
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (formData) => {
       
        const newReview = {
          ...formData,
          parkID: parseInt(props.id),
          stars: parseInt(formData.stars),
          
        };
        console.log(newReview);

        const response = await fetch(
          `http://localhost:3000/parks/${props.id}/reviews`,
          {
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });

        const createdReview = await response.json();
        reset();
        setReviews([...reviews, createdReview]);
      };

    return(


    
<div>

  {            reviews.map((review) => {
                console.log(review)
                console.log(review.text);
              
                return (
                    <div>
                      
                      <Review text={review.text} image={review.img} stars={review.stars}/>
                      
                    </div>
                    
                    )
    
            })}
            {openform && 
<div className="review-form-container">

       
       <form onSubmit={handleSubmit(onSubmit)}>
      <p>Write a review</p>
        <div className="review-input-container">
        <input className="review-form-text-input" name="text" placeholder="Tell us about your adventure." ref={register} />
        <input name="stars" type="number" min="0" max="5" ref={register}/>

        <input type="file" name="image"  accept="image/x-png,image/jpeg" ref={register}  />

        </div>
       


  <input type="submit" />

      </form>
      </div>
}

      </div>

    )
    
}

export default ReviewForm;
