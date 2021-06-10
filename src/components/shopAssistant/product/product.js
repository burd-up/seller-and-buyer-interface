import React from 'react';
import Photos from "./Photos";

function Product(props) {

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
    <button onClick={() => {props.deleteProduct(props.id)}}>delete</button>
  </div>
}

export default Product;