import React from 'react';
import Product from "./product/product";
import AddProduct from "./addProductForm/addProductForm";
import {NavLink} from "react-router-dom";
import style from './shopAssistant.module.css';
import list from '../../public/list.svg';
import {deleteAllURLForChange} from "../../redux/addProductFormReducer";

const ShopAssistant = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров"
    } else {
        products = props.products.map(product => <Product key={product.id} deleteProduct={props.deleteProduct}
                                                          name={product.name}
                                                          id={product.id} description={product.description}
                                                          price={product.price} photos={product.photos}
                                                          changeProduct={props.changeProduct}
                                                          deleteURLForChange={props.deleteURLForChange} addURLForChange={props.addURLForChange}
                                                          urlsForChange={props.urlsForChange} deleteURLForChangeOnProductID={props.deleteURLForChangeOnProductID}/>)
    }
    return (
        <div>
            <NavLink className={style.list} to='/orders'>
                <h2>Interface of assistant</h2>
                <div className={style.orders}> Orders {props.orders.length}<img src={list}/></div>
            </NavLink>
            <AddProduct addProduct={props.addProduct} addURL={props.addURL} deleteURL={props.deleteURL}
                        urls={props.urls} deleteAllURL={props.deleteAllURL}/>
            <div className={style.title}>Products</div>
            <div className={style.listOfProducts}>{products}</div>
        </div>
    )
});

export default ShopAssistant;