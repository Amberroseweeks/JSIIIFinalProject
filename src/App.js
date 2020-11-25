import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Park from "./Rest";
import ReviewForm from "./ReviewForm";
import Footer from "./Footer";
import Padding from "./Padding";


function App() {

const stateParkNames = [];
const parksData = [];

  return (
    <div >
<Navbar />  
 
<Hero>


</Hero>


<div className="container">
<Park />
</div>
<Padding />
<Footer />
</div>



  
  );
}

export default App;
