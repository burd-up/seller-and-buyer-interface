import './App.css';
import React from "react";
import ShopAssistantContainer from "./components/shopAssistant/shopAssistantContainer";
import Navbar from "./components/Navbar/header";
import {Route, withRouter} from "react-router-dom";
import BuyerContainer from "./components/buyer/BuyerContainer";
import ShoppingCartContainer from "./components/shoppingCart/ShoppingCartContainer";
import OrdersContainer from "./components/shoppingCart/orders/OrdersContainer";
import style from './App.css';
import ProductPageContainer from "./components/productPage/ProductPageContainer";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Route path='/shoppingCart' render={() => <ShoppingCartContainer/>}/>
        <Route path='/buyer' render={() => <BuyerContainer/>}/>
        <Route path='/shopAssistant' render={() => <ShopAssistantContainer/>}/>
        <Route path='/orders' render={() => <OrdersContainer/>}/>
        <Route path='/product/:productId?' render={() => <ProductPageContainer/>}/>
    </div>
  );
}

export default App;