import React, {useState} from 'react';
import style from './changeProductForm.module.css';
import InputWithValidate from "../../../helpComponent/InputWithValidate";

export const UrlInput = (props) =>{

    return <div className={style.formURL}>
        <InputWithValidate {...props.inputUrl} type={'text'} validates={{"startWith": "http"}}
                           textError={"there should be a link to the picture"} placeholder={"link to photo"}/>
    <button onClick={()=> {
        if(props.inputUrl.validateStatus){
        props.setArrUrl([props.inputUrl.value, ...props.arrUrl]);
        props.inputUrl.setValue('')
        }
    }}>AddURL</button>
</div>
}
