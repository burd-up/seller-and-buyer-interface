import React from 'react';
import style from "./shoppingCart.module.css";

const Price = React.memo((props) => {

    return (
        <div className={style.price}>
            {props.products.length === 0? null: <div>only {props.products.reduce((a,b)=> a+b.quantity*b.price, 0)} $</div>}
        </div>
    )
});

export default Price;