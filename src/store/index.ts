import { applyMiddleware, legacy_createStore as createStore } from "redux";//这边有改动 原 createStore
import createRootReducer from "./reducers";
import {createHashHistory} from "history"
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension"

export const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware,routerMiddleware(history)))/**routerMiddleware是监听路由变化，dispath一个action */
    );
    
sagaMiddleware.run(rootSaga);
export default store