import React, { useState, useEffect } from "react";
import Card from "./Card"
import Taxonomie from "./Taxonomie";
import ParkInfo from "./ParkInfo";


let parksData = [];
let parksActivityData = [];

const Park = (props) => {



  const [park, setPark] = useState({});
  useEffect(async () => {
    const getPark = async () => {
      const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
      const data = await response.json();
      
      data.map((parksinfo) => {

            parksData.push(parksinfo)


            
      })
      return parksData;
      
    };
    const park = await getPark();
    setPark(park);



  }, []);


  return (


    

        <div className="container">
        {

          

            parksData.map((parkinfo) => {
              
              let allActivities = parkinfo.activities;
              allActivities.map((activities) => {
                  
                  const activitiesList = activities.activity;
                  parksActivityData.push(activitiesList)
                  
                  const element = <Taxonomie activity={activitiesList} />;
                  return element;

})




            return (
            <div>
              
              <Card name={parkinfo.name} address={parkinfo.address} image={parkinfo.picture} activities={parkinfo.activities} id={parkinfo.id} key={parkinfo.id}/> 
            </div>
            )
      })}

        
    </div>



)
};


export default Park;