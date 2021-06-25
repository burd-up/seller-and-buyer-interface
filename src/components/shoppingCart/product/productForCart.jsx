import React from 'react';
import Photos from "../../shopAssistant/product/Photos";
import plus from '../../../public/plus.svg';
import minus from '../../../public/minus.svg';
import style from './product.module.css';
import {NavLink} from "react-router-dom";

function ProductForCart(props) {

    return <div className={style.product}>
        <div className={style.blockPhoto}>
            <div className={style.name}><h1>{props.name}</h1></div>
            <div onClick={() => props.addCurrentProduct(props.id)}>
            <NavLink to={'/product/' + props.id}>
            <Photos photos={props.photos}/>
            </NavLink>
            </div>
        </div>
        <div className={style.blockDescription}>{props.description}</div>
        <div className={style.blockPrice}>
            <div >
                <button className={style.plusMinus} onClick={() => {props.addToShoppingCart(props.id)}}><img src={plus}/></button>
                <button className={style.plusMinus} onClick={() => {props.deleteFromShoppingCart(props.id)}}><img src={minus}/></button>
            </div>
            <div>quantity: {props.quantity}</div>
            <div className={style.price}>{props.price * props.quantity} $</div>
        </div>
    </div>
}

export default ProductForCart;