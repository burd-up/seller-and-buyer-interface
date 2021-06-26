import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addOrder, addProduct, changeProduct, deleteOrder, deleteProduct} from "../../redux/shopAssistantReducer";
import ShopAssistant from "./shopAssistant";
import {
  addURL,
  addURLForChange,
  deleteAllURL,
  deleteAllURLForChange,
  deleteURL,
  deleteURLForChange, deleteURLForChangeOnProductID
} from "../../redux/addProductFormReducer";

class ShopAssistantContainer extends React.Component {
  render() {
    return <ShopAssistant {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    orders: state.shopAssistantPage.orders,
    products: state.shopAssistantPage.products,
    urls: state.addProductForm.urls,
    urlsForChange: state.addProductForm.urlsForChange,
  }
}

export default compose(
    connect(mapStateToProps,{addProduct,
      deleteProduct, changeProduct,})
)(ShopAssistantContainer)
