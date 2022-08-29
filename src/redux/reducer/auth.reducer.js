import * as ActionTypes from '../ActionTypes';

const initVal = {
    isLoading: 'false',
    user: null,
    error: ''
}

export const authReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.SIGNEDIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.SIGNOUT_USER:
            return{
                ...state,
                isLoading: false,
                user: '',
                error:''
            }
        default:
            return state;
    }
}