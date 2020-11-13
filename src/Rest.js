import React, { useState, useEffect } from "react";
import Card from "./Card"
import Herosearch from "./HeroSearch";

let parksData = [];

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
            return <Card name={parkinfo.name} address={parkinfo.address} image={parkinfo.picture} />; 
            
            
      })}

        
    </div>
        


)
};


export default Restaurant;