import React, {useEffect, useState} from 'react';
import style from "../../buyer/product/product.module.css";
import PhotoLink from "./PhotoLink";
import BlockDescription from "./BlockDescription";
import NameAndPriceBlock from "./NameAndPriceBlock";
import ChangingButton from "../../shopAssistant/product/ChangingButton";

function ProductForBuyer(props) {

    let changerAdd = false;
    if (props.productsInCartId.indexOf(props.id) !== -1) {
        changerAdd = true;
    }

    return <div className={style.product}>
        <PhotoLink photos={props.photos} addCurrentProduct={props.addCurrentProduct} id={props.id}/>
        <NameAndPriceBlock name={props.name} price={props.price}/>
        <BlockDescription description={props.description}/>
        <ChangingButton condition={changerAdd} functionOne={() => {props.deleteFromShoppingCart(props.id)}} functionTwo={() => {props.addToShoppingCart(props.id)}}
                        textOne={'delete'} textTwo={'add'} styleOne={style.button}/>
    </div>
}

export default ProductForBuyer;