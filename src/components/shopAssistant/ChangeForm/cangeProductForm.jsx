import React, { useState} from 'react';
import style from './changeProductForm.module.css';
import UrlList from "../addProductForm/UrlList";
import {UrlInput} from "./UrlInput";
import InputWithValidate from "../../../helpComponent/InputWithValidate";

const ChangeProduct = React.memo((props) =>{

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);

//прошли ли мы валидацию
    const [validatePrice, setValidatePrice] = useState(false);

// стэйт для формы добавления URL картинок
    const [currentUrl, setCurrentUrl] = useState('');
    const [arrUrl, setArrUrl] = useState(props.photos);

//вспомогательная функция управления стэйтом формы добавления URL картинок
    const deleteUrl = (number) => {
        setArrUrl(arrUrl.filter((el, i, arr) => number !== i))
    }
//отправка новых параметров в стор
    const onSubmit = () => {
        if(validatePrice){
        props.changeProduct(props.id, name, description, price, arrUrl);
        props.helpToSetChangeForm();
        }
    }

    const styleForm = props.changeForm ? style.changeForm : style.form;
    return (<div className={styleForm}>
            <div className={style.nameOfForm}>
                <h2>change product</h2>
                <button className={style.fixedButton} onClick={() => {props.helpToSetChangeForm()}}>x</button>
            </div>
            <div className={style.name}>
                <input className={style.input} type="text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name of product"/>
                <InputWithValidate startValue={price} setValueTop={setPrice} validates={{"moreThan": 0}} textError={"must be a positive number"}
                                   placeholder={"price"} setValidate={setValidatePrice} admissibilityEmpty={false} type={'number'}/>
            </div>
            <textarea className={style.inputDescription} type="text" onChange={(e) => {setDescription(e.target.value)}}
                      value={description} placeholder="description"/>
            <UrlInput setCurrentUrl={setCurrentUrl} currentUrl={currentUrl} arrUrl={arrUrl} setArrUrl={setArrUrl}/>
            <UrlList arrUrl={arrUrl} deleteUrl={deleteUrl}/>
            <button onClick={onSubmit}>change</button>
        </div>

    )
});
export default ChangeProduct;