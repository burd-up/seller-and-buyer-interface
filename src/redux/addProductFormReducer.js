const ADD_URL = 'addProductForm/ADD_URL';
const DELETE_URL = 'addProductForm/DELETE_URL';
const DELETE_ALL_URL = 'addProductForm/DELETE_ALL_URL';
const ADD_URL_FOR_CHANGE = 'addProductForm/ADD_URL_FOR_CHANGE';
const DELETE_URL_FOR_CHANGE = 'addProductForm/DELETE_URL_FOR_CHANGE';
const DELETE_ALL_URL_FOR_CHANGE= 'addProductForm/DELETE_ALL_URL_FOR_CHANGE';
const DELETE_URL_FOR_CHANGE_ON_PRODUCT_ID= 'addProductForm/DELETE_URL_FOR_CHANGE_ON_PRODUCT_ID';

const initialState = {
    _id: [],
    urls: [],
    urlsForChange: [],
};

const addProductFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_URL:
            state._id.push(state._id.length);
            let newUrl = {
                id: state._id[state._id.length-1],
                url: action.url,
            };
            return {
                ...state,
                urls: [newUrl, ...state.urls],
            };
        case DELETE_URL:
            return {
                ...state,
                urls: [...state.urls.filter(url => url.id !== action.id)],
            };
        case ADD_URL_FOR_CHANGE:
            state._id.push(state._id.length);
            let newUrlForChange = {
                idProduct: action.id,
                id: state._id[state._id.length-1],
                url: action.url,
            };
            return {
                ...state,
                urlsForChange: [newUrlForChange, ...state.urlsForChange],
            };
        case DELETE_URL_FOR_CHANGE:
            return {
                ...state,
                urlsForChange: [...state.urlsForChange.filter(url => url.id !== action.id)],
            };
        case DELETE_URL_FOR_CHANGE_ON_PRODUCT_ID:
            return {
                ...state,
                urlsForChange: [...state.urlsForChange.filter(url => url.idProduct !== action.id)],
            };
        case DELETE_ALL_URL:
            return {
                ...state,
                _id: [],
                urls: [],
            };
/*        case DELETE_ALL_URL_FOR_CHANGE:
            return {
                ...state,
                _id: [],
                urlsForChange: [],
            };*/
        default:
            return state;
    }
};

export const addURL = (url) => ({type: ADD_URL, url});
export const deleteURL = (id) => ({type: DELETE_URL, id});
export const addURLForChange = (url, id) => ({type: ADD_URL_FOR_CHANGE, url, id});
export const deleteURLForChange = (id) => ({type: DELETE_URL_FOR_CHANGE, id});
export const deleteAllURL = () => ({type: DELETE_ALL_URL});
export const deleteAllURLForChange = () => ({type: DELETE_ALL_URL_FOR_CHANGE});
export const deleteURLForChangeOnProductID = (id) => ({type: DELETE_URL_FOR_CHANGE_ON_PRODUCT_ID, id});

export default addProductFormReducer;