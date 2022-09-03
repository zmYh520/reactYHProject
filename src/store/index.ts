import { applyMiddleware, legacy_createStore as createStore } from "redux";//这边有改动 原 createStore
import createRootReducer from "./reducers";
import {createBrowserHistory} from "history"
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history))/**routerMiddleware是监听路由变化，dispath一个action */
    );

export default store