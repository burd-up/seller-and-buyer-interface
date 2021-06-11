import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import AddUrl from "./addUrlPhotosForm";

function AddProduct(props) {

    let ProductForm = (props) => {
        //const [count, setCount] = useState(1);
        //let url = [<Field component="input" name={"link" + 0} type="url" placeholder="link to photo"/>]
        //for (let i = 0; i < count; i++) {
        //    url.push(<Field component="input" name={"link" + i} type="url" placeholder="link to photo"/>)
        //}
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="input" name="name" type="text" placeholder="name of product"/>
                    <Field component="input" name="description" type="text" placeholder="description"/>
                    <Field component="input" name="price" type="number" placeholder="price"/>
                </div>
                <button>Add</button>
            </form>
        )
    }
    ProductForm = reduxForm({form: 'newProduct'})(ProductForm);

    let urls = props.urls.map(url => url.url);

    const onSubmit = (formData) => {
        props.addProduct(formData.name, formData.description, formData.price, urls);
        props.deleteAllURL()
    }

    return (<div>
            Сначала укажите все ссылки на фото товара
            <AddUrl deleteURL={props.deleteURL} addURL={props.addURL} urls={props.urls}/>
            <ProductForm onSubmit={onSubmit}/>
        </div>
    )
};
export default AddProduct;