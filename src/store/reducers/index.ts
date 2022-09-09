import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./auth.reducer";
import categoryReduce, { categoryState } from "./category.reducer";

export interface AppState{
    router:RouterState,
    auth:AuthState
    category:categoryState
}

const createRootReducer = (history:History) => combineReducers({
    auth:authReducer,
    category:categoryReduce,
    router:connectRouter(history)
})

export default createRootReducer