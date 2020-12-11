import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Park from "./Rest";
import Footer from "./Footer";
import Padding from "./Padding";
import Herosearch from "./HeroSearch";


function App() {
  const [title, setTitle] = useState('')
  console.log(title)
 
let x = 200;

  return (
    <div >
<Navbar />  
 

<Herosearch  onChange={value => setTitle(value)}/>


<div className="container">

<Park searchText={title}/>
</div>
<Padding />
<Footer />
</div>



  
  );
}

export default App;
