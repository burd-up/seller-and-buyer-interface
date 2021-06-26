import React, {useState} from 'react';
import style from "../../buyer/product/product.module.css";

function NameAndPriceBlock(props) {

    return <div>
        <div className={style.name}>{props.name}</div>
        <div className={style.price}>price: {props.price} $</div>
    </div>
}
export default NameAndPriceBlock;