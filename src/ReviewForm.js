import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@reach/router";
import Review from "./Review";



const ReviewForm = (props) =>{

    const [reviews, setReviews] = useState([]);
    const { register, handleSubmit, reset } = useForm();
      const onSubmit = async (formData) => {
        const newReview = {
          ...formData,
          stars: parseInt(formData.stars),
        };
        const response = await fetch(
          'https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/1/reviews.json',
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

        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Text</label>
        <input name="text" ref={register} />
        <label>Stars</label>
        <input name="stars" type="number" min="0" max="5" ref={register} />
        <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
        <input type="submit" />
      </form>

    )

}

export default ReviewForm;