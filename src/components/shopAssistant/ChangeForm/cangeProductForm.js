import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import AddUrl from "../addProductForm/addUrlPhotosForm";
import style from './changeProductForm.module.css';

function ChangeProduct(props) {
    const arrOfUrl = props.urlsForChange.filter(url => url.idProduct === props.id);
    let urls = arrOfUrl.map(url => url.url);

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);

    const onSubmit = () => {
        props.changeProduct(props.id, name, description, price, urls);
        props.helpToSetChangeForm();
    }

    const styleForm = props.changeForm ? style.changeForm : style.form;
    return (<div className={styleForm}>
            <div className={style.nameOfForm}><h2>change product</h2>
                <button className={style.fixedButton} onClick={() => {
                    props.helpToSetChangeForm()
                }}>x
                </button>
            </div>
            <div className={style.name}>
                <input className={style.input} type="text" onChange={(e) => {
                    setName(e.target.value)
                }} value={name} placeholder="name of product"/>
                <input className={style.input} type="number" onChange={(e) => {
                    setPrice(e.target.value)
                }} value={price} placeholder="price"/>
            </div>
            <textarea className={style.inputDescription} type="text" onChange={(e) => {
                setDescription(e.target.value)
            }} value={description} placeholder="description"/>
            <AddUrl deleteURL={props.deleteURLForChange} addURL={props.addURLForChange} urls={props.urlsForChange}/>
            <button onClick={onSubmit}>change</button>
            {/*            <ProductForm onSubmit={onSubmit}/>*/}
        </div>

    )
};
export default ChangeProduct;