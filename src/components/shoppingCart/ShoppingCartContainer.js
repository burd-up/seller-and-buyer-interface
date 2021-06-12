import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addToShoppingCart, CleanShoppingCart, deleteFromShoppingCart} from "../../redux/buyerReducer";
import Buyer from "./Buyer";

class BuyerContainer extends React.Component {
  render() {
    return <Buyer {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    products: state.shopAssistantPage.products,
    productsInCart: state.buyer.productsInCart
  }
}

export default compose(
    connect(mapStateToProps,{addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart})
)(BuyerContainer)
