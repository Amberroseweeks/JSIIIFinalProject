import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Herosearch from "./HeroSearch";
import Card from "./Card";


function App() {

  const getData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/Stateparks.JSON");
    const data = await response.json();
    console.log(data);
    return data;
  };

  getData();

  return (
    <div >
<Navbar />  

<Hero>


</Hero>
<Herosearch />
<Card />

</div>

  
  );
}

export default App;
