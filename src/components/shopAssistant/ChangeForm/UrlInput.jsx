import React from 'react';
import style from './changeProductForm.module.css';
import InputWithValidate from "../../../helpComponent/InputWithValidate";

export const UrlInput = (props) =>{
    return <div className={style.formURL}>
        <InputWithValidate startValue={props.currentUrl} setValueTop={props.setCurrentUrl} type={'text'} validates={{"startWith": "http"}}
                           textError={"there should be a link to the picture"} placeholder={"link to photo"}/>
    <button onClick={()=> {
        props.setArrUrl([props.currentUrl, ...props.arrUrl]);
        props.setCurrentUrl('')
    }}>AddURL</button>
</div>
}
