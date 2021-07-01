import React from 'react';
import ProductForCart from "./product/productForCart";
import style from "./shoppingCart.module.css";
import {NavLink} from "react-router-dom";
import HeaderOfBuyer from "../buyer/HeaderOfBuyer";
import Price from "./Price";

const ShoppingCart = React.memo((props) => {

    let products;
    if (props.products.length === 0) {
        products = "No products in the cart"
    } else {

        products = props.products.map(product => <ProductForCart key={product.id}
                                                                 deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                                 name={product.name}
                                                                 addToShoppingCart={props.addToShoppingCart}
                                                                 id={product.id} description={product.description}
                                                                 price={product.price} photos={product.photos}
                                                                 quantity={product.quantity} addCurrentProduct={props.addCurrentProduct}/>)
    }
    return (
        <div>
            <HeaderOfBuyer orders={props.orders} productsInCart={props.products}/>
            <div className={style.title}>ShoppingCart:</div>
            <div>{products}</div>
            <Price products={props.products}/>
            {props.products.length !== 0 ? <button className={style.doOrder} onClick={() => {
                props.addOrder(props.products);
                props.CleanShoppingCart();
            }}>do order</button>
                : <NavLink className={style.button} to='/buyer'>to shopping</NavLink>}
        </div>
    )
});

export default ShoppingCart;