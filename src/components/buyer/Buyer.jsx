import React from 'react';
import ProductForBuyer from "./product/productForBuyer";
import {NavLink} from "react-router-dom";
import style from "../buyer/buyer.module.css";
import cartImg from '../../public/shopping_cart_black_24dp.svg';
import Cart from "./Cart";

const Buyer = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров"
    } else {
        products = props.products.map(product => <ProductForBuyer key={product.id}
                                                                  deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                                  name={product.name}
                                                                  addToShoppingCart={props.addToShoppingCart}
                                                                  id={product.id} description={product.description}
                                                                  price={product.price} photos={product.photos}
                                                                  productsInCartId={props.productsInCartId} addCurrentProduct={props.addCurrentProduct}/>)
    }

    return (
        <div>
            <div className={style.list}>
                <h2>Interface of buyer</h2>
                <Cart productsInCart={props.productsInCart}/>
            </div>
            <h3 className={style.title}>Products</h3>
            <div className={style.listOfProducts}>{products}</div>
        </div>
    )
});

export default Buyer;