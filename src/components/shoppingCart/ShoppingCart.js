import React from 'react';
import ProductForBuyer from "./product/productForBuyer";

const Buyer = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет товаров"
    } else {
        products = props.products.map(product => <ProductForBuyer key={product.id} deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                          name={product.name} addToShoppingCart={props.addToShoppingCart}
                                                          id={product.id} description={product.description}
                                                          price={product.price} photos={product.photos}/>)
    }
    return (
        <div>
            <h3>Товары:</h3>
            {products}
        </div>
    )
});

export default Buyer;