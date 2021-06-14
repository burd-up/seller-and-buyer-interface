import React from 'react';
import ProductForCart from "./product/productForCart";

const Orders = React.memo((props) => {
    let products;
    if (props.products.length === 0) {
        products = "Нет Заказов"
    } else {
        products = props.orders.map(order => <Order key={order.id} deleteFromShoppingCart={props.deleteFromShoppingCart}
                                                          name={product.name} addToShoppingCart={props.addToShoppingCart}
                                                          id={order.id} description={product.description}
                                                          price={product.price} photos={product.photos} quantity={product.quantity}/>)
    }
    return (
        <div>
            <h3>Товары:</h3>
            {products}
        </div>
    )
});

export default Orders;