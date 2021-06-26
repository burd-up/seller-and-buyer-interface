import React, {useEffect, useState} from 'react';
import Photos from "./Photos";
import style from './product.module.css';
import ChangeProduct from "../ChangeForm/cangeProductForm";
import BlockDescription from "../../buyer/product/BlockDescription";
import NameAndPriceBlock from "../../buyer/product/NameAndPriceBlock";
import ChangingButton from "./ChangingButton";

const Product = React.memo((props) => {
    const [changeForm, setChangeForm] = useState(false)
    const helpToSetChangeForm = () => {
        setChangeForm(false)
    }

    useEffect(() => {changeForm ? props.photos.map(url => {props.addURLForChange(url, props.id)}): props.deleteURLForChangeOnProductID(props.id)}, [changeForm]);


    return <div className={style.product}>
        <ChangeProduct changeForm={changeForm} {...props} helpToSetChangeForm={helpToSetChangeForm}/>
        <Photos className={style.photo} photos={props.photos}/>
        <NameAndPriceBlock name={props.name} price={props.price}/>
        <BlockDescription description={props.description}/>
        <div className={style.chengeDelete}>
            <ChangingButton condition={changeForm} functionOne={() => {setChangeForm(false)}} functionTwo={() => {setChangeForm(true)}}
                            textOne={'close window changes'} textTwo={'change'}/>
            <button className={style.button} onClick={() => {props.deleteProduct(props.id)}}>delete</button>
        </div>
    </div>
})

export default Product;