import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import OrdersForBuyer from "./OrdersForBuyer";
import {productCartSelector} from "../shoppingCart/selectors/selectors";

class OrdersForBuyerContainer extends React.Component {
  render() {
    return <OrdersForBuyer {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
    productsInCart: productCartSelector(state.shopAssistantPage.products, state.buyer.productsInCartId),
  }
}

export default compose(
    connect(mapStateToProps,{})
)(OrdersForBuyerContainer)
