import React from 'react';
import style from '../orders/order.module.css';
import HeaderOfShopAssistant from "../../shopAssistant/headerOfShopAssistant";
import Order from "../orders/Order";

const OrdersCompleted = React.memo((props) => {

    let orders;
    if (props.ordersPerform.length === 0) {
        orders = "No orders"
    } else {
        orders = props.ordersPerform.map(order => <Order key={order.id} id={order.id} status={order.status} products={order.productsInCart} completeTheOrder={props.completeTheOrder}/>)
    }
    return (
        <div>
            <HeaderOfShopAssistant orders={props.orders}/>
            <div className={style.title}>Orders</div>
            <div className={style.productsInOrder}><div>{orders}</div></div>
        </div>
    )
});

export default OrdersCompleted;