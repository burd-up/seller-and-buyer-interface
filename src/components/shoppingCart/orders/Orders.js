import React from 'react';
import ProductForCart from "./product/productForCart";

const ShoppingCart = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров в корзине"
        //определения колличества каждого элемента в массиве

    } else {

        products = props.products.map(product => <ProductForCart key={product.id} deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                          name={product.name} addToShoppingCart={props.addToShoppingCart}
                                                          id={product.id} description={product.description}
                                                          price={product.price} photos={product.photos} quantity={product.quantity}/>)
    }
    return (
        <div>
            <h3>Товары:</h3>
            {products}
        </div>
    )
});

export default ShoppingCart;