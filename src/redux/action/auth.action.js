import * as ActionTypes from '../ActionTypes';

export const  signUpAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload :data})
}