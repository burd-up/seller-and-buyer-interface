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

const InputWithValidate = React.memo( ({ isBlur, setIsBlur, showHints, setValidateStatus = null, value, setValue, validates,
                                           textError = 'error', placeholder = '', type = "text", admissibilityEmpty = true}) => {

/*    const [isBlur, setIsBlur] = useState(false);*/
    let validationText = null;

    const condition = admissibilityEmpty? value.length > 0 : true;

    if(!validate(value, validates) && condition) {
        validationText=textError;
        setValidateStatus(false);
    }else setValidateStatus(true);


    return (<div className={style.inputWithValidate}>
        <input className={style.input} type={type} onChange={(e) => {
            setValue(e.target.value);
        }} value={value} placeholder={placeholder} onFocus={() => setIsBlur(false)} onBlur={() => setIsBlur(true)}/>
            {validationText && isBlur || showHints? <div className={style.validate}>{validationText}</div> : null}
        </div>
    )
});

export default InputWithValidate