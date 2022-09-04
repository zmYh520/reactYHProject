import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./auth.reducer";

export interface AppState{
    router:RouterState,
    auth:AuthState
}

const createRootReducer = (history:History) => combineReducers({
    auth:authReducer,
    router:connectRouter(history)
})

export default createRootReducer