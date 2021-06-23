import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addToShoppingCart, CleanShoppingCart, deleteFromShoppingCart} from "../../redux/buyerReducer";
import {addOrder, deleteOrder} from "../../redux/shopAssistantReducer";
import {withRouter} from "react-router-dom";
import ProductPage from "./ProductPage";


class ProductPageContainer extends React.Component {

    componentDidMount() {
        console.log("Container" + this.props.match.params.productId)
    }

    render() {
        return <div>
            <ProductPage productId={this.props.match.params.productId} {...this.props}/>
        </div>;
    }
};


let mapStateToProps = (state) => {
    return {
        productsInCartId: state.buyer.productsInCartId,
        products: state.shopAssistantPage.products,
    }
}

export default compose(
    connect(mapStateToProps, {addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart, addOrder, deleteOrder}),
    withRouter,
)(ProductPageContainer)
