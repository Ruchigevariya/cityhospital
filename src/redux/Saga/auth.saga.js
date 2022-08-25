import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signinApi, signupApi } from '../../common/API/auth.api';

import * as ActionTypes from '../ActionTypes';

function* signUp(action) {
   try {
      const user = yield call(signupApi, action.payload);
      console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* signIn(action) {
  try{
    const user = yield call(signinApi, action.payload)
    
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}
function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGNIN_USER,signIn)
}

export function* authSaga(){
    yield all([              // yield = generate karve
        watchSignUp(),
        watchSignIn()
    ])
}