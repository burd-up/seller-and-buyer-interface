import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import Url from "./urlOfPhoto";
import style from './addProductForm.module.css';

function AddUrl(props) {

    let UrlForm = (props) => {
        return (
            <form className={style.formURL} onSubmit={props.handleSubmit}>
                    <Field className={style.input} component="input" name={"link"} type="url" placeholder="link to photo"/>
                <button>AddURL</button>
            </form>
        )
    }
    UrlForm = reduxForm({form: 'newURL'})(UrlForm);

    const onSubmit = (formData) => {
        props.addURL(formData.link, props.id);
    }

    let urls = props.urls.map(url => <Url deleteURL={props.deleteURL} id={url.id} url={url.url}/>)

    return (<div>
            <UrlForm onSubmit={onSubmit}/>
            <div className={style.list}>
            {urls}
            </div>
        </div>
    )
};
export default AddUrl;