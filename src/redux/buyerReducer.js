const ADD_TO_SHOPPING_CART = 'byer/ADD_TO_SHOPPING_CART';
const DELETE_FROM_SHOPPING_CART = 'byer/DELETE_FROM_SHOPPING_CART';
const CLEAN_SHOPPING_CART = 'byer/CLEAN_SHOPPING_CART';
const ADD_CURRENT_PRODUCT = 'byer/ADD_CURRENT_PRODUCT';
const DELETE_CURRENT_PRODUCT = 'byer/DELETE_CURRENT_PRODUCT';

const initialState = {
    productsInCartId: [],
    currentProduct: null,
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
        case ADD_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.id,
            };
        case DELETE_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: null,
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

export const addToShoppingCart = (id) => ({type: ADD_TO_SHOPPING_CART, id});
export const deleteFromShoppingCart = (id) => ({type: DELETE_FROM_SHOPPING_CART, id});
export const CleanShoppingCart = () => ({type: CLEAN_SHOPPING_CART});
export const addCurrentProduct = (id) => ({type: ADD_CURRENT_PRODUCT, id});
export const deleteCurrentProduct = () => ({type: DELETE_CURRENT_PRODUCT});

export default buyerReducer;