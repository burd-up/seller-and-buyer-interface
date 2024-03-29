import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
  addCurrentProduct,
  addToShoppingCart,
  CleanShoppingCart,
  deleteFromShoppingCart
} from "../../redux/buyerReducer";
import ShoppingCart from "./ShoppingCart";
import {productCartSelector} from "./selectors/selectors";
import {addOrder, deleteOrder} from "../../redux/shopAssistantReducer";


class ShoppingCartContainer extends React.Component {
  render() {
    return <ShoppingCart {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    products: productCartSelector(state.shopAssistantPage.products, state.buyer.productsInCartId),
    orders: state.shopAssistantPage.orders,
  }
}

export default compose(
    connect(mapStateToProps,{addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart, addOrder, deleteOrder, addCurrentProduct})
)(ShoppingCartContainer)
