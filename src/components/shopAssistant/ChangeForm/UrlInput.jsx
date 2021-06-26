import React from 'react';
import style from './changeProductForm.module.css';

export const UrlInput = (props) =>{
    return <div className={style.formURL}>
    <input className={style.input} type = 'url' onChange={(e) => {props.setCurrentUrl(e.target.value)}} value={props.currentUrl} placeholder="link to photo"/>
    <button onClick={()=> {
        props.setArrUrl([props.currentUrl, ...props.arrUrl]);
        props.setCurrentUrl('')
    }}>AddURL</button>
</div>
}
