import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import categorySaga from "./category.saga";

export default function* rootSaga(){
    yield all([authSaga(),categorySaga()])//这个地方的执行（）
}