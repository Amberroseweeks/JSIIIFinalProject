import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {ICONS} from "./constants";
import StarIcons from "./StarIcons.js";







const ReviewForm = (props) =>{
  console.log(props.id)
  

  const starOneStatus = ["EmptyStar"];
  let starTwoStatus = ["EmptyStar"];
  let starThreeStatus = ["EmptyStar"];
  let starFourStatus = ["EmptyStar"];
  
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
          
        };
        console.log(newReview);

        const response = await fetch(
          `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}/reviews.json`,
          {
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              'Accept': 'application/json',
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          });

        const createdReview = await response.json();
        reset();
        setReviews([...reviews, createdReview]);
      };

    return(


    
<div>
<div className="review-form-container">

        <form onSubmit={handleSubmit(onSubmit)}>
      
        <div className="review-input-container">
        <input className="review-form-name-input" placeholder="Name" name="name" ref={register} />
        <input className="review-form-text-input" name="text" placeholder="Tell us about your adventure." ref={register} />
        <input type="file" name="image"  accept="image/x-png,image/jpeg" ref={register}  />
        </div>


        {/* <div className="review-stars-container"> */}

        {/* <div className="starSelection-1" value="1" onClick={()=> value1(starOneStatus)}> */}

        {/* {starOneStatus.map((star) => {

          let starValue = 1;
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
                        )
                    })}
          </div>
          <div className="starSelection-2" onClick={()=> value2(starTwoStatus)}>
          {starTwoStatus.map((star) => {
            let starValue = 2;
                        return (
                           
                          <StarIcons icon={ICONS[star]}/>
                               
                            
                                
                            
                        )
                    })}
                    </div>
            <div className="starSelection-3" onClick={()=> value3(starThreeStatus)}>
                    {starThreeStatus.map((star) => {
                      let starValue = 3;
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
                        )
                    })}
            </div>
            <div className="starSelection-4" onClick={()=> value4(starFourStatus)}>
            
                    {
                    
                    starFourStatus.map((star) => {
                      let starValue = 4
                        return (
                           
                          <StarIcons icon={ICONS[star]} />
                               
                            
                                
                            
                        )
                    })}
            </div>
        </div> */}

  <input type="submit" />

      </form>
      </div>

      </div>

    )
    
}

export default ReviewForm;
