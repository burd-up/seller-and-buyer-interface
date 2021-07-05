import React, {useState} from 'react';
import style from './addProductForm.module.css';
import UrlList from "./UrlList";
import {UrlInput} from "../ChangeForm/UrlInput";
import InputWithValidate from "../../../helpComponent/InputWithValidate";

function AddProduct(props) {

    console.log("top component")

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);

//прошли ли мы валидацию
    const [validatePrice, setValidatePrice] = useState(false);

// стэйт для формы добавления URL картинок
    const [currentUrl, setCurrentUrl] = useState('');
    const [arrUrl, setArrUrl] = useState([]);

//вспомогательная функция управления стэйтом формы добавления URL картинок
    const deleteUrl = (number) => {
        setArrUrl(arrUrl.filter((el, i, arr) => number !== i))
    }

//отправка новых параметров в стор
    const onSubmit = () => {
        if(validatePrice) {
        props.addProduct(name, description, price, arrUrl);
        setName('');
        setDescription('');
        setPrice(null);
        setCurrentUrl('');
        setArrUrl([]);
        }
    }

    return (<div className={style.form}>
            <h2>form for adding a product</h2>
            <div className={style.name}>
                <input className={style.input} type = "text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name of product"/>
                <InputWithValidate startValue={price} setValueTop={setPrice} validates={{"moreThan": 0}} textError={"must be a positive number"}
                                   placeholder={"price"} setValidate={setValidatePrice} admissibilityEmpty={false} type={'number'}/>
            </div>
            <textarea className={style.inputDescription} type = "text" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="description"/>
            <UrlInput setCurrentUrl={setCurrentUrl} currentUrl={currentUrl} arrUrl={arrUrl} setArrUrl={setArrUrl}/>
            <UrlList arrUrl={arrUrl} deleteUrl={deleteUrl}/>
            <button onClick={onSubmit}>add</button>
        </div>
    )
};
export default AddProduct;