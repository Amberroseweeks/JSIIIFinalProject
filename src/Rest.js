import React, { useState, useEffect } from "react";
import Card from "./Card"
import Herosearch from "./HeroSearch";
import Taxonomie from "./Taxonomie";

let parksData = [];
let parksActivityData = [];

const Park = (props) => {
  const [reviews, setReviews] = useState([]);
  const [park, setPark] = useState({});
  useEffect(async () => {
    const getPark = async () => {
      const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
      const data = await response.json();
      console.log(data);
      data.map((parksinfo) => {

            parksData.push(parksinfo)


            
      })
      return parksData;
      
    };
    const park = await getPark();
    setPark(park);


    const getReviews = async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/parks/12/reviews.json`
      );
      const reviews = await response.json();
      setReviews(reviews);
      console.log(reviews);
    };

    getReviews();
  }, []);
console.log(park);


  return (


    

        <div className="container">
        {

          

            parksData.map((parkinfo) => {
              console.log(parkinfo);
              let allActivities = parkinfo.activities;
              allActivities.map((activities) => {
                  
                  const activitiesList = activities.activity;
                  parksActivityData.push(activitiesList)
                  
                  const element = <Taxonomie activity={activitiesList} />;
                  return element;

})




            return <Card name={parkinfo.name} address={parkinfo.address} image={parkinfo.picture} activities={parkinfo.activities} /> ; 
            
            
      })}

        
    </div>
        


)
};


export default Park;