import React from 'react';
import Product from "./product/product";
import AddProduct from "./addProductForm";

const ShopAssistant = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров"
    } else {
        products = props.products.map(product => <Product key={product.id} deleteProduct={props.deleteProduct}
                                                          name={product.name}
                                                          id={product.id} description={product.description}
                                                          price={product.price} photos={product.photos}/>)
    }
    return (
        <div>
            <AddProduct addProduct={props.addProduct}/>
            <h3>Товары:</h3>
            {products}
        </div>
    )
});

export default ShopAssistant;