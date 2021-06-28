import React from 'react';
import Order from "../orders/Order";
import style from '../orders/order.module.css';
import HeaderOfShopAssistant from "../../shopAssistant/headerOfShopAssistant";

const OrdersCompleted = React.memo((props) => {

    let orders;
    if (props.ordersCompleted.length === 0) {
        orders = "No completed orders"
    } else {
        orders = props.ordersCompleted.map(order => <Order key={order.id} id={order.id} status={order.status} products={order.productsInCart} completeTheOrder={props.completeTheOrder}/>)
    }
    return (
        <div>
            <HeaderOfShopAssistant orders={props.orders}/>
            <div className={style.title}>Completed orders</div>
            <div className={style.productsInOrder}><div>{orders}</div></div>
        </div>
    )
});

export default OrdersCompleted;