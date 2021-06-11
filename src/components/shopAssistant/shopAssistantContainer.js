import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addProduct, deleteProduct} from "../../redux/shopAssistantReducer";
import ShopAssistant from "./shopAssistant";
import {addURL, deleteAllURL, deleteURL} from "../../redux/addProductFormReducer";

class ShopAssistantContainer extends React.Component {
  render() {
    return <ShopAssistant {...this.props} />;
  }
};

let mapStateToProps = (state) => {
  return {
    products: state.shopAssistantPage.products,
    urls: state.addProductForm.urls,
  }
}

export default compose(
    connect(mapStateToProps,{addProduct, deleteProduct, addURL, deleteURL, deleteAllURL})
)(ShopAssistantContainer)
