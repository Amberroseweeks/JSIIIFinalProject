import React, { useState, useEffect } from "react";
import Card from "./Card"
import Herosearch from "./HeroSearch";
import Taxonomie from "./Taxonomie";

let parksData = [];
let parksActivityData = [];

const Park = (props) => {

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
// console.log(parksActivityData);
// console.log(parkinfo.activities[0].activity);
let activityResults = parkinfo.activities[0].activity;
let activityResults2 = parkinfo.activities[1].activity;


let activityURL = parkinfo.activities[0].URL;
let activityURL2 = parkinfo.activities[1].URL;
let finalActivity = activityResults.replace(/\s/g, "");
let finalActivity2 = activityResults2.replace(/\s/g, "");


console.log(finalActivity);
            return <Card name={parkinfo.name} address={parkinfo.address} image={parkinfo.picture} activities={parkinfo.activities} activity={finalActivity} url={activityURL} activity2={finalActivity2} url2={activityURL2} /> ; 
            
            
      })}

        
    </div>
        


)
};


export default Park;