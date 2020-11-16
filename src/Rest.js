import React, { useState, useEffect } from "react";
import Card from "./Card"
import Herosearch from "./HeroSearch";
import Taxonomie from "./Taxonomie";

let parksData = [];
let parksActivityData = [];

const Restaurant = (props) => {

  const [park, setRestaurant] = useState({});
  useEffect(async () => {
    const getRestaurant = async () => {
      const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
      const data = await response.json();
      console.log(data);
      data.map((parksinfo) => {

            parksData.push(parksinfo)


            
      })
      return parksData;
      
    };
    const park = await getRestaurant();
    setRestaurant(park);


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
console.log(parksActivityData);
console.log(parkinfo.activities[0].activity);
            return <Card name={parkinfo.name} address={parkinfo.address} image={parkinfo.picture} activity={parkinfo.activities[0].activity} /> ; 
            
            
      })}

        
    </div>
        


)
};


export default Restaurant;