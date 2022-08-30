import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signinApi, SignOutApi, signupApi } from '../../common/API/auth.api';
import { history } from '../../history';
import { setAlert } from '../action/alert.action';
import { signedInAction } from '../action/auth.action';

import * as ActionTypes from '../ActionTypes';

function* signUp(action) {
  try {
    const user = yield call(signupApi, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* signIn(action) {
  try {
    const user = yield call(signinApi, action.payload)
    yield put(signedInAction(user))
    history.push("/")

    yield put(setAlert({ text: "Login successfully", color: "success" }))
    console.log(user);
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.payload, color: "error" }))
  }
}

function* signOut(action) {
  try{
    const user = yield call(SignOutApi)
    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signIn)
}

function* watchSignOut() {
  yield takeEvery(ActionTypes.SIGNOUT_USER, signOut)
}

export function* authSaga() {
  yield all([              // yield = generate karve
    watchSignUp(),
    watchSignIn(),
    watchSignOut()
  ])
}