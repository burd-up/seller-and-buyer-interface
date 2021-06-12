import React from 'react';
import Photos from "../../shopAssistant/product/Photos";

function ProductForBuyer(props) {

  return <div>
    <div >
      <h1>name: {props.name}</h1>
    </div>
      <Photos photos={props.photos}/>
    <div>
      description: {props.description}
    </div>
    <div>
      price: {props.price}
    </div>
    <button onClick={() => {props.addToShoppingCart(props.id)}}>addToShoppingCart</button>
    <button onClick={() => {props.deleteFromShoppingCart(props.id)}}>deleteFromShoppingCart</button>
  </div>
}

export default ProductForBuyer;