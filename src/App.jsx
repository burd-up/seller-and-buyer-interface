import './App.css';
import React from "react";
import Navbar from "./components/Navbar/header";
import {Route} from "react-router-dom";
import BuyerContainer from "./components/buyer/BuyerContainer";
import ShoppingCartContainer from "./components/shoppingCart/ShoppingCartContainer";
import OrdersContainer from "./components/shoppingCart/orders/OrdersContainer";
import ProductPageContainer from "./components/productPage/ProductPageContainer";
import StartPage from "./components/StartPage/StartPage";
import OrdersCompletedContainer from "./components/shoppingCart/ordersCompleted/OrdersCompletedContainer";
import OrdersForBuyerContainer from "./components/OrdersForBuyer/OrdersForBuyerContainer";
import ShopAssistantContainer from "./components/shopAssistant/shopAssistantContainer";


function App() {
  return (
    <div className="app">
        <Navbar/>
        <Route path='/shoppingCart' render={() => <ShoppingCartContainer/>}/>
        <Route path='/buyer' render={() => <BuyerContainer/>}/>
        <Route path='/shopAssistant' render={() => <ShopAssistantContainer/>}/>
        <Route path='/ordersPerformed' render={() => <OrdersContainer/>}/>
        <Route path='/ordersCompleted' render={() => <OrdersCompletedContainer/>}/>
        <Route path='/ordersForBuyer' render={() => <OrdersForBuyerContainer/>}/>
        <Route path='/product/:productId?' render={() => <ProductPageContainer/>}/>
        <Route exact path='/' render={() => <StartPage/>}/> {/*exact если мы хотим чтобы маршруты совпадали точно*/}
    </div>
  );
}

export default App;
