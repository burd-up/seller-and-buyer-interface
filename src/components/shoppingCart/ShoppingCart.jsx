import React from 'react';
import ProductForCart from "./product/productForCart";
import {CleanShoppingCart, deleteFromShoppingCart} from "../../redux/buyerReducer";
import style from "./shoppingCart.module.css";
import {NavLink} from "react-router-dom";

const ShoppingCart = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров в корзине"
    } else {

        products = props.products.map(product => <ProductForCart key={product.id}
                                                                 deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                                 name={product.name}
                                                                 addToShoppingCart={props.addToShoppingCart}
                                                                 id={product.id} description={product.description}
                                                                 price={product.price} photos={product.photos}
                                                                 quantity={product.quantity}/>)
    }
    return (
        <div>

            <div className={style.title}>ShoppingCart:</div>
            <div>{products}</div>
            {props.products.length !== 0 ? <button className={style.doOrder} onClick={() => {
                props.addOrder(props.products);
                props.CleanShoppingCart();
            }}>do order</button>
                : <NavLink onClick={() => {
                    props.addOrder(props.products);
                    props.deleteFromShoppingCart();
                }} className={style.button} to='/buyer'>to shopping</NavLink>}
        </div>
    )
});

export default ShoppingCart;