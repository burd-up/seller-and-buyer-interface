import React, { useState} from 'react';
import style from './changeProductForm.module.css';
import UrlList from "../addProductForm/UrlList";
import {UrlInput} from "./UrlInput";
import InputWithValidate from "../../../helpComponent/InputWithValidate";
import {useInputValidate} from "../../../hooks/useInputValidate";

const ChangeProduct = React.memo((props) =>{

    const inputName = useInputValidate(props.name);
    const inputPrice = useInputValidate(props.price);
    const [description, setDescription] = useState(props.description);

// стэйт для формы добавления URL картинок
    const inputUrl = useInputValidate('');
    const [arrUrl, setArrUrl] = useState(props.photos);

//вспомогательная функция управления стэйтом формы добавления URL картинок
    const deleteUrl = (number) => {
        setArrUrl(arrUrl.filter((el, i, arr) => number !== i))
    }

//отправка новых параметров в стор
    const onSubmit = () => {
        if(inputPrice.validateStatus && inputName.validateStatus){
        props.changeProduct(props.id, inputName.value, description, inputPrice.value, arrUrl);
        props.helpToSetChangeForm();
        } else {
            inputPrice.setShowHints(true);
            inputName.setShowHints(true);
        };
    }

    const styleForm = props.changeForm ? style.changeForm : style.form;
    return (<div className={styleForm}>
            <div className={style.nameOfForm}>
                <h2>change product</h2>
                <button className={style.fixedButton} onClick={() => {props.helpToSetChangeForm()}}>x</button>
            </div>
            <div className={style.name}>
                <InputWithValidate {...inputName} validates={{"minLength": 1}} textError={"cannot be empty"}
                                   placeholder={"name of product"} admissibilityEmpty={false} type={'text'}/>
                <InputWithValidate {...inputPrice} validates={{"moreThan": 0}} textError={"must be a positive number"}
                                   placeholder={"price $"} admissibilityEmpty={false} type={'number'}/>
            </div>
            <textarea className={style.inputDescription} type="text" onChange={(e) => {setDescription(e.target.value)}}
                      value={description} placeholder="description"/>
            <UrlInput inputUrl={inputUrl} arrUrl={arrUrl} setArrUrl={setArrUrl}/>
            <UrlList arrUrl={arrUrl} deleteUrl={deleteUrl}/>
            <button onClick={onSubmit}>change</button>
        </div>

    )
});
export default ChangeProduct;