import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Beaches from "./Beaches";
import Camping from "./Camping";
import Scenic from "./Scenic";
import TopFive from "./TopFive";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App path ="/" />
    <Beaches path="/Beaches" />
    <Camping path="/Camping" />
    <Scenic path="/Scenic" />
    <TopFive path="/TopFive" />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


