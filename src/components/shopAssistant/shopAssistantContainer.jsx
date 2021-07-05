import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import { addProduct, changeProduct, deleteOrder, deleteProduct} from "../../redux/shopAssistantReducer";
import ShopAssistant from "./shopAssistant";

class ShopAssistantContainer extends React.Component {
  render() {
    return <ShopAssistant {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
    products: state.shopAssistantPage.products,
  }
}

export default compose(
    connect(mapStateToProps,{addProduct,
      deleteProduct, changeProduct,})
)(ShopAssistantContainer)
