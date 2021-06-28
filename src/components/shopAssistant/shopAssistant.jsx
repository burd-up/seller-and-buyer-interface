import React from 'react';
import Product from "./product/product";
import AddProduct from "./addProductForm/addProductForm";
import style from './shopAssistant.module.css';
import HeaderOfShopAssistant from "./headerOfShopAssistant";

const ShopAssistant = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "No products"
    } else {
        products = props.products.map(product => <Product key={product.id} {...product} deleteProduct={props.deleteProduct}
                                                          changeProduct={props.changeProduct}/>)
    }
    return (
        <div>
            <HeaderOfShopAssistant orders={props.orders}/>
            <AddProduct addProduct={props.addProduct} addURL={props.addURL} deleteURL={props.deleteURL}
                        urls={props.urls} deleteAllURL={props.deleteAllURL}/>
            <div className={style.title}>Products</div>
            <div className={style.listOfProducts}>{products}</div>
        </div>
    )
});

export default ShopAssistant;