import { call, put, takeEvery, all } from 'redux-saga/effects'
import { forgotPasswordApi, googleSigninApi, signinApi, SignOutApi, signupApi } from '../../common/API/auth.api';
import { history } from '../../history';
import { setAlert } from '../action/alert.action';
import { signedInAction, signedOutAction } from '../action/auth.action';

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

function* GoogleSignIn(action) {
  try {
    const user = yield call(googleSigninApi)
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
    yield put(signedOutAction(user))
    history.push("/")

    yield put(setAlert({ text: user.payload, color: "success" }))
    console.log(user);
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }))
    console.log(e);
  }
}

function* fogotPassword(action){
  try{
    const user = yield call(forgotPasswordApi, action.payload)
    yield put(signedInAction(user))
    history.push("/")
    
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

function* watchGoogleSignIn() {
  yield takeEvery(ActionTypes.GOOGLESIGNIN_USER, GoogleSignIn)
}

function* watchSignOut() {
  yield takeEvery(ActionTypes.SIGNOUT_USER, signOut)
}

function* watchForgotPassword() {
  yield takeEvery(ActionTypes.FORGOTPASSWORD_USER, fogotPassword)
}

export function* authSaga() {
  yield all([              // yield = generate karve
    watchSignUp(),
    watchSignIn(),
    watchSignOut(),
    watchGoogleSignIn(),
    watchForgotPassword()
  ])
}