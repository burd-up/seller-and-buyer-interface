import React from 'react';
import style from './product.module.css';
import PluseMinusButton from "../../productPage/PluseMinusButton";
import PhotoLink from "../../buyer/product/PhotoLink";

function ProductForCart(props) {

    return <div className={style.product}>
        <div className={style.blockPhoto}>
            <div className={style.name}><h1>{props.name}</h1></div>
            <PhotoLink photos={props.photos} addCurrentProduct={props.addCurrentProduct} id={props.id}/>
        </div>
        <div className={style.blockDescription}>{props.description}</div>
        <div className={style.blockPrice}>
            <PluseMinusButton addToShoppingCart={props.addToShoppingCart} deleteFromShoppingCart={props.deleteFromShoppingCart}
                              id={props.id}/>
            <div>quantity: {props.quantity}</div>
            <div className={style.price}>{props.price * props.quantity} $</div>
        </div>
    </div>
}

export default ProductForCart;