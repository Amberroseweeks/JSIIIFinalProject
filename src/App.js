import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Restaurant from "./Rest"


function App() {

const stateParkNames = [];
const parksData = [];





  const getData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
    const data = await response.json();
 
    data.forEach(function(data){
      parksData.push(data)
      
    })

    data.map((parksinfo) => {
      console.log(parksinfo);
      console.log(parksinfo.name);
      return (
        
      <Card parkName={parksinfo.name} />
      );
    })

    
// console.log(parksData);
    return data
  };

  getData();

  


  return (
    <div >
<Navbar />  
 
<Hero>


</Hero>


<div className="container">
<Restaurant />
</div>

</div>

  
  );
}

export default App;
