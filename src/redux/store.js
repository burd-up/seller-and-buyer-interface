import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import shopAssistantReducer from "./shopAssistantReducer";
import buyerReducer from "./buyerReducer";

let reducers = combineReducers({
    shopAssistantPage: shopAssistantReducer,
    buyer: buyerReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;