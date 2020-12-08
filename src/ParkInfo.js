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
let activityLength;
let width = window.innerWidth;
console.log(width);

const ParkInfo = (props) =>{



    // const [show, setShow] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [parks, setPark] = useState([]);
    const [open, setOpen] = useState(false);
    const [openform, setOpenForm] = useState(false);
   


    useEffect(async () => {

        const getPark= async () => {
            const response = await fetch(
              `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON`
            );
            const parks = await response.json();
            setPark(parks);
            console.log(parks)
          };
    
 
console.log(parks)
        
        const getReviews = async () => {
          
          const response = await fetch(
            `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/${props.id}/reviews.json`
          );
      
          const reviews = await response.json();
          setReviews(reviews);
          
      

            reviewData.push(reviews);
            
            

            reviews.map((review) => {
                console.log(review)
                console.log(review.text);
              
                return (
                    <div>
                      
                      <Review text={review.text} image={review.img} stars={review.stars}/>; 
                    </div>
                    )
    
            })
        };
      
          getReviews();
          getPark();
          


          
        }, []);


return (
    
    <div className="parkinfopagecontainer">
        <Navbar /> 
        <ParkInfoHero image={props.location.state.image} name={props.location.state.name} activities={props.location.state.activities} />
        <div class="activityiconbarcontainer">
        
        {            parks.map((park)=>{
                if(park.id == props.id){
                    console.log(park.activities);
                    activityLength = Object.keys(park.activities).length;
                    
                    return (
                        <div className = "parkinfoiconcontainer">
                        {
                            (Object.keys(park.activities).length > 4) &&
                            <i className="arrow right"></i>
                            }

{/* width < "430" ||  */}
                      
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
          console.log(review.text)
        return (
            
        <Review stars={review.stars} text={review.text} image={review.img} />
        
        )
      })}
      </div>





<Reviews />


<p onClick={()=> setOpenForm(!openform)}>Write a review</p>
{openform &&
    <ReviewForm id={props.id}/>
}
    </div>

);
}

export default ParkInfo;