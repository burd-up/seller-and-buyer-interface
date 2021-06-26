import React from 'react';
import style from './addProductForm.module.css';

function Url(props) {

    return (<div className={style.formOneURL}>
            <img className={style.imgUrl} src={props.url}/>
            <p className={style.URL}>{props.url}</p>
            <button className={style.buttonForDeleteUrl} onClick={() => props.deleteURL()}>delete link</button>
        </div>
    )
};
export default Url;