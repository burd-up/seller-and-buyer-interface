import React from 'react';
import Order from "./Order";
import style from './order.module.css';

const Orders = React.memo((props) => {

    let orders;
    if (props.orders.length === 0) {
        orders = "Нет Заказов"
    } else {
        orders = props.orders.map(order => <Order key={order.id} id={order.id} products={order.productsInCart}/>)
    }
    return (
        <div>
            <div className={style.title}>Orders</div>
            <div className={style.productsInOrder}><div>{orders}</div></div>
        </div>
    )
});

export default Orders;