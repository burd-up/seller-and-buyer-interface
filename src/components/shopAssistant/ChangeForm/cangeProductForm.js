import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import AddUrl from "./addUrlPhotosForm";
import style from './changeProductForm.module.css';

function ChangeProduct(props) {
    let urls = props.urlsForChange.map(url => url.url);

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);

    const onSubmit = () => {
        props.changeProduct(props.id, name, description, price, urls);
        props.deleteAllURLForChange();
        props.helpToSetChangeForm();
    }

    const styleForm = props.changeForm ? style.changeForm : style.form;
    return (<div className={styleForm}>
                <h2>change product</h2>
            <div className={style.name}>
                <input className={style.input} type = "text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name of product"/>
                <input className={style.input} type = "number" onChange={(e) => {setPrice(e.target.value)}} value={price} placeholder="price"/>
            </div>
            <textarea className={style.inputDescription} type = "text" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="description"/>
            <AddUrl deleteURL={props.deleteURLForChange} addURL={props.addURLForChange} urls={props.urlsForChange}/>
            <button onClick={onSubmit}>change</button>
{/*            <ProductForm onSubmit={onSubmit}/>*/}
        </div>

    )
};
export default ChangeProduct;