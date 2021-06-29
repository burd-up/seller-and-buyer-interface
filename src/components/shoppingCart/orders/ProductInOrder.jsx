import React from 'react';
import style from './order.module.css';

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

export default ProductInOrder;