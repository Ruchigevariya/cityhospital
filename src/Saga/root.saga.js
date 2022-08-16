import { all } from "redux-saga/effects";
import { signUpsaga } from "./auth.saga";

export function* rootSaga(){
    yield all([
        signUpsaga
    ])
}