import React from 'react';
import style from '../shoppingCart/orders/order.module.css';
import Order from "./Order";
import HeaderOfBuyer from "../buyer/HeaderOfBuyer";

const OrdersForBuyer = React.memo((props) => {

    let orders;
    if (props.orders.length === 0) {
        orders = "No orders"
    } else {
        orders = props.orders.map(order => <Order key={order.id} id={order.id} status={order.status} products={order.productsInCart} completeTheOrder={props.completeTheOrder}/>)
    }
    return (
        <div>
            <HeaderOfBuyer orders={props.orders} productsInCart={props.productsInCart}/>
            <div className={style.title}>Orders</div>
            <div className={style.productsInOrder}><div>{orders}</div></div>
        </div>
    )
});

export default OrdersForBuyer;