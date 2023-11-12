import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./Reducers/index";
import asyncFuctionMiddleware from "./Middlewares/asyncFunctionMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(asyncFuctionMiddleware)));
export default store;
