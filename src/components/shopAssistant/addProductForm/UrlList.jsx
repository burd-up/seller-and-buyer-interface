import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import Url from "./urlOfPhoto";
import style from './addProductForm.module.css';

function UrlList(props) {

    let urls = props.arrUrl.map((url, n) => <Url deleteURL={() => props.deleteUrl(n)} url={url}/>)

    return (<div>
            <div className={style.list}>
            {urls}
            </div>
        </div>
    )
};
export default UrlList;