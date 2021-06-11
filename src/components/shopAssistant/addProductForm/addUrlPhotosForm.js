import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import Url from "./urlOfPhoto";

function AddUrl(props) {

    let UrlForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="input" name={"link"} type="url" placeholder="link to photo"/>
                </div>
                <button>AddURL</button>
            </form>
        )
    }
    UrlForm = reduxForm({form: 'newURL'})(UrlForm);

    const onSubmit = (formData) => {
        props.addURL(formData.link);
    }

    let urls = props.urls.map(url => <Url deleteURL={props.deleteURL} id={url.id} url={url.url}/>)

    return (<div>
            <UrlForm onSubmit={onSubmit}/>
            {urls}
        </div>
    )
};
export default AddUrl;