import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {addToShoppingCart, CleanShoppingCart, deleteFromShoppingCart, requestReviews} from "../../redux/buyerReducer";
import {addOrder, deleteOrder} from "../../redux/shopAssistantReducer";
import {withRouter} from "react-router-dom";
import ProductPage from "./ProductPage";


class ProductPageContainer extends React.Component {

    componentDidMount() {
        this.props.requestReviews();
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
        reviews: state.buyer.reviewsProduct,
    }
}

export default compose(
    connect(mapStateToProps, {addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart, addOrder, deleteOrder, requestReviews}),
    withRouter,
)(ProductPageContainer)
