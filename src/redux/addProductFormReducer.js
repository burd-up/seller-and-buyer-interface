const ADD_URL = 'addProductForm/ADD_URL';
const DELETE_URL = 'addProductForm/DELETE_URL';
const DELETE_ALL_URL = 'addProductForm/DELETE_ALL_URL';

const initialState = {
    _id: [],
    urls: [],
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
        case DELETE_ALL_URL:
            return {
                ...state,
                _id: [],
                urls: [],
            };
        default:
            return state;
    }
};

export const addURL = (url) => ({type: ADD_URL, url});
export const deleteURL = (id) => ({type: DELETE_URL, id});
export const deleteAllURL = () => ({type: DELETE_ALL_URL});

export default addProductFormReducer;