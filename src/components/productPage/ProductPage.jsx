import React from 'react';
import plus from '../../public/plus.svg';
import minus from '../../public/minus.svg';
import style from './product.module.css';
import PhotosLarge from "./PhotosLarge";

function ProductPage(props) {

    let product = props.products.filter(el => el.id === Number(props.productId))[0];
    return <div>
        <div className={style.product}>
            <div className={style.blockPhoto}>
                <div className={style.name}><h1>{product.name}</h1></div>
                <PhotosLarge photos={product.photos}/>
            </div>
            <div className={style.blockDescription}>{product.description}</div>
        </div>
        <div className={style.blockPrice}>
            <div>
                <button className={style.plusMinus} onClick={() => {
                    props.addToShoppingCart(product.id)
                }}><img src={plus}/></button>
                <button className={style.plusMinus} onClick={() => {
                    props.deleteFromShoppingCart(product.id)
                }}><img src={minus}/></button>
            </div>
            <div>quantity: {product.quantity}</div>
            <div className={style.price}>{product.price * product.quantity} $</div>
        </div>

    </div>
}

export default ProductPage;