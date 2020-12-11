import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Icons from './Icons.js';
import ParkInfoIcons from './ParkInfoIcons.js';
import {ICONS} from './constants';
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Review from "./Review";
import ParkInfoHero from "./ParkinfoHero";
import Arrow from "./Arrow";
import ActivityIconBar from "./ActivityIconBar";
import ActivityIcon from "./ActivityIcon";
import { Link } from "@reach/router";
import { render } from "@testing-library/react";



const reviewData=[];
const activities=[];
const activityList=[];

let activityLength;

let width = window.innerWidth;

const ParkInfo = (props) =>{

    console.log(activityList)

   
    const [reviews, setReviews] = useState([]);
    
    const [parks, setPark] = useState([]);
    const [open, setOpen] = useState(false);
   
    
   


    useEffect(async () => {
        
        const getPark= async () => {
            const response = await fetch(
              `http://localhost:3000/parks`
            );
            const parks = await response.json();
            setPark(parks);
            console.log(parks)
          };
          

          const getReviews = async () => {
          
            const response = await fetch(
              `http://localhost:3000/parks/${props.id}/reviews`
            );
        
            const reviews = await response.json();
            setReviews(reviews);
            console.log(reviews)
            
        
  
              reviewData.push(reviews);
              

          };
    
 
console.log(parks)
        

      
          getReviews();
          getPark();
          


          
        }, []);
        let activitiesMap = parks.map((park)=>{
        if(park.id == props.id){
            console.log(park.activities)
            let fullActivities = park.activities
            activities.push(fullActivities)
                    return (
                        fullActivities
                    )

                }

            })
        
        
        console.log(activitiesMap);

return (
    
    <div className="parkinfopagecontainer">
        <Navbar /> 
        <ParkInfoHero image={props.location.state.image} name={props.location.state.name} activities={props.location.state.activities} />
        <div class="activityiconbarcontainer">
        
        {            parks.map((park)=>{
                if(park.id == props.id){
                    activityLength = Object.keys(park.activities).length;
                    
                    return (
                        <div className = "parkinfoiconcontainer">
                        {
                            
                            (Object.keys(park.activities).length > 4) &&
                            <i className="arrow right"></i>
                            }
                      
                        {park.activities.map((activity) => {
                           
                            
                            
                            let activityFilter = activity.activity.replace(/\s/g, "");
                            return (
                                
                                <a href={activity.URL}>
                                    <ParkInfoIcons icon={ICONS[activityFilter]} name={activity.activity}/>
                                    
                                   
                                </a>
                                
                                
                            )
                        })}
                        
                        
                    </div>
                    )
                }
                
                
            })}


        </div>
       


           <div>  
           <div className="review-activity-icon-container">
           
                    </div>     

      </div>  
      <div className="reviewcontainer">
          <p onClick={()=> setOpen(!open)}>View reviews</p>

{open &&
      reviews.map((review) => {

        return (
            
        <Review stars={review.stars} text={review.text} image={review.img} />
        
        )
      })}
      </div>





<Reviews />


    <ReviewForm id={props.id} activities={activities}/>

    </div>

);
}

export default ParkInfo;