import * as ActionTypes from '../ActionTypes';

export const  signUpAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload :data})
}

export const signInAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNIN_USER, payload: data})
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNEDIN_USER, payload: data})
}

export const signOutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.SIGNOUT_USER})
}

export const signedOutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.SIGNEDOUT_USER})
}

export const fogotPasswordAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.FORGOTPASSWORDACTION, payload: data})
}