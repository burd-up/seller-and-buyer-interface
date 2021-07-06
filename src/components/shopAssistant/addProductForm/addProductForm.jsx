import React, {useState} from 'react';
import style from './addProductForm.module.css';
import UrlList from "./UrlList";
import {UrlInput} from "../ChangeForm/UrlInput";
import InputWithValidate from "../../../helpComponent/InputWithValidate";
import {useInputValidate} from "../../../hooks/useInputValidate";

function AddProduct(props) {

    const inputName = useInputValidate('');
    const inputPrice = useInputValidate('')

    const [description, setDescription] = useState('');

// стэйт для формы добавления URL картинок
    const inputUrl = useInputValidate('');
    const [arrUrl, setArrUrl] = useState([]);

//вспомогательная функция управления стэйтом формы добавления URL картинок
    const deleteUrl = (number) => {
        setArrUrl(arrUrl.filter((el, i, arr) => number !== i))
    }

// функция обнуляющая все значения
    const zeroingValues = () => {
        inputName.setValue('');
        setDescription('');
        inputPrice.setValue('');
        inputUrl.setValue('');
        setArrUrl([]);
    };

// приводим наши валидационные инпуты в исходное состояние
const toInitialStateInput = () => {
    inputPrice.setIsBlur(false);
    inputName.setIsBlur(false);
}

//отправка новых параметров в стор если поля прошли валидацию и показать подсказку если не прошли
    const onSubmit = () => {
        if(inputPrice.validateStatus && inputName.validateStatus) {
        props.addProduct(inputName.value, description, inputPrice.value, arrUrl);
        zeroingValues();
        toInitialStateInput();
        } else {
            inputPrice.setShowHints(true);
            inputName.setShowHints(true);
        }
    }

    return (<div className={style.form}>
            <h2>form for adding a product</h2>
            <div className={style.name}>
                <InputWithValidate {...inputName} validates={{"minLength": 1}} textError={"cannot be empty"}
                                   placeholder={"name of product"} admissibilityEmpty={false} type={'text'}/>
                <InputWithValidate {...inputPrice} validates={{"moreThan": 0}} textError={"must be a positive number"}
                                   placeholder={"price $"} admissibilityEmpty={false} type={'number'}/>
            </div>
            <textarea className={style.inputDescription} type = "text" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="description"/>
            <UrlInput inputUrl={inputUrl} arrUrl={arrUrl} setArrUrl={setArrUrl}/>
            <UrlList arrUrl={arrUrl} deleteUrl={deleteUrl}/>
            <button onClick={onSubmit}>add</button>
        </div>
    )
};
export default AddProduct;