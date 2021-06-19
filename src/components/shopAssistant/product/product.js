import React, {useEffect, useState} from 'react';
import Photos from "./Photos";
import style from './product.module.css';
import arrowMore from '../../../public/arrows/expand_more.svg';
import ChangeProduct from "../ChangeForm/cangeProductForm";

function Product(props) {
    const [changeForm, setChangeForm] = useState(false)
    const [changer, setChanger] = useState(false)
    const helpToSetChangeForm = () => {
        setChangeForm(false)
    }

    useEffect(() => {changeForm ? props.photos.map(url => {props.addURLForChange(url, props.id)}): props.deleteURLForChangeOnProductID(props.id)}, [changeForm]);


    return <div className={style.product}>
        <ChangeProduct changeForm={changeForm}
                       name={props.name} price={props.price} photos={props.photos} description={props.description}
                       id={props.id} changeProduct={props.changeProduct} deleteURLForChange={props.deleteURLForChange}
                       addURLForChange={props.addURLForChange}
                       urlsForChange={props.urlsForChange} deleteAllURLForChange={props.deleteAllURLForChange}
                       helpToSetChangeForm={helpToSetChangeForm}/>

        <Photos className={style.photo} photos={props.photos}/>
        <div className={style.name}>{props.name}</div>
        <div className={style.price}>price: {props.price} $</div>
        {!changer ?
            <button className={style.descriptionButtonOpen} onClick={() => setChanger(true)}>description </button>
            : <div className={style.description}>
                <textarea className={style.descriptionText} value={props.description}></textarea>
                <button className={style.descriptionButton} onClick={() => setChanger(false)}>x</button>
            </div>
        }
        <div className={style.chengeDelete}>
            {changeForm ? <button className={style.buttonChange} onClick={() => {
                setChangeForm(false)
            }}>close window changes
            </button> : <button className={style.buttonChange} onClick={() => {
                setChangeForm(true)
            }}>change
            </button>}
            <button className={style.button} onClick={() => {
                props.deleteProduct(props.id)
            }}>delete
            </button>
        </div>
    </div>
}

export default Product;