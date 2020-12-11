import React, { useState, useEffect } from "react";
import Card from "./Card"
import Taxonomie from "./Taxonomie";
import ParkInfo from "./ParkInfo";


let parksData = [];
let parksActivityData = [];
let parkFilter = [];

const Park = (props) => {
  console.log(props.searchText)



  const [park, setPark] = useState({});
  useEffect(async () => {
    const getPark = async () => {
      const response = await fetch("http://localhost:3000/parks");
      console.log(response)
      const data = await response.json();
      
      data.map((parksinfo) => {

            parksData.push(parksinfo)


            
      })
      return parksData;
      
    };
    const park = await getPark();
    setPark(park);



  }, []);


  let parkNameFilter = parksData.filter(function (e) {
    const parkName = e.name
    const parkAddress = e.address
    const parkNameLowercase = parkName.toLowerCase()
    const parkAddressLowercase = parkAddress.toLowerCase()
    return parkNameLowercase.includes(props.searchText) || parkAddressLowercase.includes(props.searchText)
});
console.log(parkNameFilter);


  return (


    

        <div className="container">
        {
            parkNameFilter.map((parkinfo) => {

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