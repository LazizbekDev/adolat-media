import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {newsItemReducer, newsListReducer} from "./redux/reducers/xabarlar";

const middleware = [thunk]
const initialState = {};
const reducer = combineReducers({
    newsList: newsListReducer,
    newsItem: newsItemReducer
})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;