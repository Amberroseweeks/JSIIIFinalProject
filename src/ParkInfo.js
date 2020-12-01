import React from "react";
import Navbar from "./Navbar";
import Icons from './Icons.js';
import {ICONS} from './constants';
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Review from "./Review";
import ParkInfoHero from "./ParkinfoHero";
import Card from "./Card";
import { Link } from "@reach/router";
import { render } from "@testing-library/react";




const ParkInfo = (props) =>{
    console.log(props);
    console.log("This works!")
    console.log(props.name)
    console.log(props.id)
return (
    
    <div className="container">
        <Navbar /> 
<p>this works! {props.id} {props.name} </p>
{/* <Card /> */}
<ParkInfoHero />
<Reviews />
<Review />
    </div>

);
}

export default ParkInfo;