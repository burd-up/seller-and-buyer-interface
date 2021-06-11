import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import shopAssistantReducer from "./shopAssistantReducer";
import addProductFormReducer from "./addProductFormReducer";

let reducers = combineReducers({
    shopAssistantPage: shopAssistantReducer,
    addProductForm: addProductFormReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;