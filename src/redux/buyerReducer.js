import {reviewsAPI} from "../api/api";

const ADD_TO_SHOPPING_CART = 'byer/ADD_TO_SHOPPING_CART';
const DELETE_FROM_SHOPPING_CART = 'byer/DELETE_FROM_SHOPPING_CART';
const CLEAN_SHOPPING_CART = 'byer/CLEAN_SHOPPING_CART';
const SET_REVIEWS_PRODUCT = 'byer/SET_REVIEWS_PRODUCT';
const DELETE_REVIEWS_PRODUCT = 'byer/DELETE_REVIEWS_PRODUCT';

const initialState = {
    productsInCartId: [],
    reviewsProduct: [],
};

const buyerReducer = (state = initialState, action) => {
    switch (action.type) {
        //определения колличества каждого элемента в массиве
        //var result = [1, 3, 4, 1, 1, 3, 4, 5].reduce(function(acc, el) {
        //    acc[el] = (acc[el] || 0) + 1;
        //    return acc;
        //}, {});

        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                productsInCartId: [action.id, ...state.productsInCartId],
            };
        case DELETE_FROM_SHOPPING_CART:
            let arr = [...state.productsInCartId]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === action.id) {
                    let newArr = arr.splice(i, 1);
                    return {
                        ...state,
                        productsInCartId: arr,
                    };
                }
            }
        case SET_REVIEWS_PRODUCT:
            return {
                ...state,
                reviewsProduct: action.reviews,
            };
        case DELETE_REVIEWS_PRODUCT:
            return {
                ...state,
                reviewsProduct: [],
            };
        case CLEAN_SHOPPING_CART:
            return {
                ...state,
                productsInCartId: [],
            };
        default:
            return state;
    }
};

//Thunks is hear!
export const requestReviews = (currentPage, pageSize) => {
    return async (dispatch) => {
        /*dispatch(toggleIsFetching(true));*/
        let data = await reviewsAPI.getReviews(currentPage, pageSize);
        console.log(data);
        dispatch(setReviewsProduct(data));
    }
}

export const addToShoppingCart = (id) => ({type: ADD_TO_SHOPPING_CART, id});
export const deleteFromShoppingCart = (id) => ({type: DELETE_FROM_SHOPPING_CART, id});
export const CleanShoppingCart = () => ({type: CLEAN_SHOPPING_CART});
export const setReviewsProduct = (reviews) => ({type: SET_REVIEWS_PRODUCT, reviews});
export const deleteReviewsProduct = () => ({type: DELETE_REVIEWS_PRODUCT});

export default buyerReducer;