import React, {useState} from 'react';
import Photos from "../../shopAssistant/product/Photos";
import style from "../../buyer/product/product.module.css";

function ProductForBuyer(props) {

    let changerAdd = false;
    if (props.productsInCartId.indexOf(props.id) !== -1){
        changerAdd = true;
    };

    const [changer, setChanger] = useState(false)

    return <div className={style.product}>
        <Photos photos={props.photos}/>
        <div className={style.name}>{props.name}</div>
        <div className={style.price}>price: {props.price} $</div>
        {!changer ?
            <button className={style.descriptionButtonOpen} onClick={() => setChanger(true)}>description </button>
            : <div className={style.description}>
                <textarea className={style.descriptionText} value={props.description}></textarea>
                <button className={style.descriptionButton} onClick={() => setChanger(false)}>x</button>
            </div>
        }
            {changerAdd ? <button className={style.button} onClick={() => {
                    props.deleteFromShoppingCart(props.id);
                }}>delete
                </button>
                : <button className={style.buttonAdd} onClick={() => {
                    props.addToShoppingCart(props.id);
                }}>add
                </button>}
    </div>
}

export default ProductForBuyer;