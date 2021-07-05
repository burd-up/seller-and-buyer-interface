import React, {useState} from "react";
import style from './InputWithValidate.module.css';

const validate = (value, validates) => {

    switch (Object.keys(validates)[0]) {
        case 'minLength':
            if (value.length >= validates[Object.keys(validates)[0]]) return true;
        case 'moreThan':
            if (value > validates[Object.keys(validates)[0]]) return true;
        case 'startWith':
            if (value != null)
            return value.startsWith(validates[Object.keys(validates)[0]]);
        default:
            return null;
    }
};

const InputWithValidate = React.memo( (props) => {

    let { startValue = '', setValidate = null, setValueTop, validates, textError, placeholder, type = "text", admissibilityEmpty = true} = props;

    const [value, setValue] = useState(startValue);
    const [isBlur, setIsBlur] = useState(false);
    let validationText = null;
    let statusOfValidation = false; //прошло ли содержимое валидацию

    const condition = admissibilityEmpty? value.length > 0 : true;

    if(!validate(value, validates) && condition) {
        validationText=textError;
    }else statusOfValidation = true;


    return (<div className={style.inputWithValidate}>
        <input className={style.input} type={type} onChange={(e) => {
            setValue(e.target.value);
        }} value={value} placeholder={placeholder} onFocus={() => setIsBlur(false)} onBlur={() => {setIsBlur(true);
            setValueTop(value);
            setValidate? setValidate(statusOfValidation) : null;
        }}/>
            {validationText && isBlur? <div className={style.validate}>{validationText}</div> : null}
        </div>
    )
});

export default InputWithValidate