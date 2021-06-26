import React, {useState} from 'react';
import style from './addProductForm.module.css';
import UrlList from "./UrlList";
import {UrlInput} from "../ChangeForm/cangeProductForm";

function AddProduct(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);

// стэйт для формы добавления URL картинок
    const [currentUrl, setCurrentUrl] = useState('');
    const [arrUrl, setArrUrl] = useState([]);

//вспомогательная функция управления стэйтом
    const deleteUrl = (number) => {
        setArrUrl(arrUrl.filter((el, i, arr) => number !== i))
    }

//отправка новых параметров в стор
    const onSubmit = () => {
        props.addProduct(name, description, price, arrUrl);
        setName('');
        setDescription('');
        setPrice(null);
        setCurrentUrl('');
        setArrUrl([]);
    }

    return (<div className={style.form}>
            <h2>form for adding a product</h2>
            <div className={style.name}>
                <input className={style.input} type = "text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name of product"/>
                <input className={style.input} type = "number" onChange={(e) => {setPrice(e.target.value)}} value={price} placeholder="price"/>
            </div>
            <textarea className={style.inputDescription} type = "text" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="description"/>
            <UrlInput setCurrentUrl={setCurrentUrl} currentUrl={currentUrl} arrUrl={arrUrl} setArrUrl={setArrUrl}/>
            <UrlList arrUrl={arrUrl} deleteUrl={deleteUrl}/>
            <button onClick={onSubmit}>add</button>
        </div>
    )
};
export default AddProduct;