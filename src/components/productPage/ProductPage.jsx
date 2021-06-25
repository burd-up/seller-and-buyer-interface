import React, {useEffect, useState} from 'react';
import plus from '../../public/plus.svg';
import minus from '../../public/minus.svg';
import style from './product.module.css';
import PhotosLarge from "./PhotosLarge";
import Reviews from "../Reviews/Reviews";
import Cart from "../buyer/Cart";

const ProductPage = React.memo ((props) =>{

    const [isReviews, setIsReviews] = useState(false);

    let product = props.products.filter(el => el.id === Number(props.productId))[0];
    return <div>
        <div className={style.topContent}>
            <h2 className={style.name}>{product.name}</h2>
            <Cart productsInCart={props.productsInCart}/>
        </div>
        <div className={style.product}>
            <PhotosLarge photos={product.photos}/>
            <div className={style.discription}>
                <div className={style.titleOfdescription}>Briefly about the product:</div>
                <div className={style.blockDescription}>{product.description}</div>
            </div>
        </div>

        {props.productsInCartId.indexOf(Number(props.productId)) === -1?
            <button onClick={() => props.addToShoppingCart(Number(props.productId))} className={style.buttonForAdd}>add</button>
            : <div className={style.blockPrice}>
                <div></div>
                <div>
                    <button className={style.plusMinus} onClick={() => {
                        props.addToShoppingCart(product.id)
                    }}><img src={plus}/></button>
                    <button className={style.plusMinus} onClick={() => {
                        props.deleteFromShoppingCart(product.id)
                    }}><img src={minus}/></button>
                </div>
                <div>quantity: {props.thisProductsInCart.quantity}<br/>price: {props.thisProductsInCart.price * props.thisProductsInCart.quantity}</div>
                {/*<div className={style.price}>{product.price * product.quantity} $</div>*/}
            </div>}

        {isReviews? <Reviews reviews={props.reviews}/> : <button onClick={() => setIsReviews(true)} className={style.buttonForAdd}>Reviews</button>}

    </div>
})

export default ProductPage;