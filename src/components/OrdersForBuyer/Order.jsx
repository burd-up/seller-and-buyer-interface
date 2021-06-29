import React from 'react';
import style from '../shoppingCart/orders/order.module.css';
import ProductInOrder from "../shoppingCart/orders/ProductInOrder";

const Order = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "empty order"
    } else {
        products = props.products.map(product => <ProductInOrder key={product.id} name={product.name}
                                                                 id={product.id} description={product.description}
                                                                 price={product.price} photos={product.photos}
                                                                 quantity={product.quantity}/>)
    }

    return (
        <div className={style.order}>
            <div className={style.titleOrder}>
                <div className={style.numberOrder}>Order number {props.id}</div>
                <div >status: {props.status}</div>
                <div></div>
                <div></div>
            </div>
            {products}
        </div>
    )
});

export default Order;