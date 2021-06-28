import React from 'react';
import style from './order.module.css';
import {completeTheOrder} from "../../../redux/shopAssistantReducer";

const ProductInOrder = (props) => {
    return (<div className={style.product}>
            <div className={style.blockPhoto}>
                <div className={style.name}>{props.name}</div>
                <img className={style.imgUrl} src={props.photos[0]}/>
            </div>
            <div className={style.blockDescription}>description: {props.description}</div>
            <div className={style.blockPrice}>
                <div>quantity: {props.quantity}</div>
                <div className={style.price}>{props.price * props.quantity} $</div>
            </div>
        </div>
    )
};

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
                {props.status === 'perform'? <button className={style.buttonBorder} onClick={()=> props.completeTheOrder(props.id)}>Completed</button>: null}
            </div>
{/*            <div className={style.numberOrder}>Order number {props.id}</div>*/}
            {products}
        </div>
    )
});

export default Order;