import React from 'react';
import style from "../buyer/buyer.module.css";
import Cart from "./Cart";
import OrdersForBuyerButton from "./OrdersForBuyerButton";

const HeaderOfBuyer = React.memo((props) => {

    return (
            <div className={style.list}>
                <h2>Interface of buyer</h2>
                <OrdersForBuyerButton orders={props.orders}/>
                <Cart productsInCart={props.productsInCart}/>
            </div>
    )
});

export default HeaderOfBuyer;