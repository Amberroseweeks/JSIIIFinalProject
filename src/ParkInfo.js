import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Icons from './Icons.js';
import {ICONS} from './constants';
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Review from "./Review";
import ParkInfoHero from "./ParkinfoHero";
import Card from "./Card";
import { Link } from "@reach/router";
import { render } from "@testing-library/react";



const reviewData=[];
const ParkInfo = (props) =>{


      

    console.log(props);
    console.log("This works!")
    console.log(props.name)
    console.log(props.location.state.image)

   
    const [reviews, setReviews] = useState([]);

    useEffect(async () => {
    
        
        const getReviews = async () => {
          
          const response = await fetch(
            `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}/reviews.json`
          );
      
          const reviews = await response.json();
          setReviews(reviews);
          
      

            reviewData.push(reviews);
            

            // console.log(reviewData);
            

            reviews.map((review) => {
                console.log(review)
                console.log(review.text);
              
                return (
                    <div>
                      
                      <Review text={review.text} />; 
                    </div>
                    )
    
            })
        };
      
          getReviews();
          


          
        }, []);


return (
    
    <div className="container">
        <Navbar /> 
        <p>this works! {props.id} {props.location.state.name} {props.location.state.address} {props.location.state.image} </p>
{/* <Card /> */}
<ParkInfoHero />


{
      reviews.map((review) => {
          console.log(review.text)
        return <Review stars={review.stars} text={review.text} />;
      })}



<Reviews />
{/* <Review /> */}
<ReviewForm />

    </div>

);
}

export default ParkInfo;