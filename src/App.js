import './App.css';
import React from "react";
import ShopAssistantContainer from "./components/shopAssistant/shopAssistantContainer";
import Navbar from "./components/Navbar/header";
import {Route, withRouter} from "react-router-dom";
import BuyerContainer from "./components/buyer/BuyerContainer";

function App() {
  return (
    <div>
        <Navbar/>
        <Route path='/buyer' render={() => <BuyerContainer/>}/>
        <Route path='/shopAssistant' render={() => <ShopAssistantContainer/>}/>
    </div>
  );
}

export default App;
