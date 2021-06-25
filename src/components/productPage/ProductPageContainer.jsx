import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addCurrentProduct,
    addToShoppingCart,
    CleanShoppingCart,
    deleteCurrentProduct,
    deleteFromShoppingCart,
    requestReviews
} from "../../redux/buyerReducer";
import {addOrder, deleteOrder} from "../../redux/shopAssistantReducer";
import {withRouter} from "react-router-dom";
import ProductPage from "./ProductPage";
import {oneProductCartSelector} from "./selectors/selectors";
import {productCartSelector} from "../shoppingCart/selectors/selectors";



class ProductPageContainer extends React.Component {

    componentDidMount() {
        this.props.requestReviews();
        this.props.addCurrentProduct(Number(this.props.match.params.productId))
    }

    render() {
        return <div>
            <ProductPage productId={this.props.match.params.productId} {...this.props}/>
        </div>;
    }
    componentWillUnmount() {
        this.props.deleteCurrentProduct();
    }
};


let mapStateToProps = (state) => {
    return {
        productsInCartId: state.buyer.productsInCartId,
        products: state.shopAssistantPage.products,
        reviews: state.buyer.reviewsProduct,
        thisProductsInCart: oneProductCartSelector(state.shopAssistantPage.products, state.buyer.productsInCartId, Number(state.buyer.currentProduct)),
        productsInCart: productCartSelector(state.shopAssistantPage.products, state.buyer.productsInCartId),
    }
}

export default compose(
    connect(mapStateToProps, {addToShoppingCart, deleteFromShoppingCart, CleanShoppingCart,
        addOrder, deleteOrder, requestReviews,
        addCurrentProduct, deleteCurrentProduct}),
    withRouter,
)(ProductPageContainer)
