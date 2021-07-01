import React, {useState} from 'react';
import style from './product.module.css';
import PhotosLarge from "./PhotosLarge";
import Reviews from "../Reviews/Reviews";
import PluseMinusButton from "./PluseMinusButton";
import HeaderOfBuyer from "../buyer/HeaderOfBuyer";

const ProductPage = React.memo ((props) =>{

    const [isReviews, setIsReviews] = useState(false);

    const closeReviews = () => setIsReviews(false);

    let product = props.products.filter(el => el.id === Number(props.productId))[0];
    return <div>
        <HeaderOfBuyer orders={props.orders} productsInCart={props.productsInCart}/>
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
                <div className={style.plusMinusButton}><PluseMinusButton addToShoppingCart={props.addToShoppingCart}
                                                                         deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                                         id={props.thisProductsInCart.id}/>
                </div>

                <div>quantity: {props.thisProductsInCart.quantity}<br/>price: {props.thisProductsInCart.price * props.thisProductsInCart.quantity}</div>
            </div>}

        {isReviews? <Reviews requestReviews={props.requestReviews} closeReviews={closeReviews} reviews={props.reviews}/> :
            <button onClick={() => setIsReviews(true)} className={style.buttonForAdd}>Reviews</button>}

    </div>
})

export default ProductPage;