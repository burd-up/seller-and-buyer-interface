import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import AddUrl from "./addUrlPhotosForm";
import style from './addProductForm.module.css';

function AddProduct(props) {
    let urls = props.urls.map(url => url.url);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);

    const onSubmit = () => {
        props.addProduct(name, description, price, urls);
        props.deleteAllURL()
        setName('');
        setDescription('');
        setPrice(null);

    }

    return (<div className={style.form}>
            <h2>form for adding a product</h2>
            <div className={style.name}>
                <input className={style.input} type = "text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name of product"/>
                <input className={style.input} type = "number" onChange={(e) => {setPrice(e.target.value)}} value={price} placeholder="price"/>
            </div>
            <textarea className={style.inputDescription} type = "text" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="description"/>
            <AddUrl deleteURL={props.deleteURL} addURL={props.addURL} urls={props.urls}/>
            <button onClick={onSubmit}>add</button>
            {/*<ProductForm onSubmit={onSubmit}/>*/}
        </div>
    )
};
export default AddProduct;