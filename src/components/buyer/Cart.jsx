import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../buyer/buyer.module.css";
import cartImg from '../../public/shopping_cart_black_24dp.svg';

const Cart = (props) => {
    return (
            <NavLink className={style.nav} to='/shoppingCart'>
                <div className={style.orders}><img src={cartImg}/><br/>{props.productsInCart.length}</div>
            </NavLink>
    )
};

export default Cart;