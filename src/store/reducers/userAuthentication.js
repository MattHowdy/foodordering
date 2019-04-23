import * as actionTypes from '../actions/actionTypes'


const initialState = {
    loading: false,
    userId: null,
    token: null,
    isAuthenticated : false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.USER_AUTHENTICATION_START):
            return {...state, loading: true}
        case (actionTypes.USER_AUTHENTICATION_SUCCESS):
            return {...state, userId: action.userId, token: action.token, isAuthenticated : action.isAuthenticated, loading: false}
        case (actionTypes.USER_AUTHENTICATION_FAILED):
            return {...state, loading: false}
        case (actionTypes.USER_LOGOUT):
            return {...state, userId: null, token : null, isAuthenticated: false, loading: false}
        default:
            return state

    }
}


export default reducer

