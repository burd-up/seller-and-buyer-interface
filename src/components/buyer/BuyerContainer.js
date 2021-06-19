import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addToShoppingCart, CleanShoppingCart, deleteFromShoppingCart} from "../../redux/buyerReducer";
import Buyer from "./Buyer";
import {productCartSelector} from "../shoppingCart/selectors/selectors";

class BuyerContainer extends React.Component {
  render() {
    return <Buyer {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    productsInCart: productCartSelector(state.shopAssistantPage.products, state.buyer.productsInCartId),
    products: state.shopAssistantPage.products,
    productsInCartId: state.buyer.productsInCartId,

  }
}

export default compose(
    connect(mapStateToProps,{addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart})
)(BuyerContainer)
