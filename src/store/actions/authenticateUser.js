import axios from '../../axios-orders'
import * as actionTypes from "./actionTypes";



export const userAuthenticationStart = () => {
    return {type: actionTypes.USER_AUTHENTICATION_START}
}
export const userAuthenticationSuccess = (userId, token, isAuthenticated) => {
    return {type: actionTypes.USER_AUTHENTICATION_SUCCESS, userId: userId, token: token, isAuthenticated : isAuthenticated}
}
export const userAuthenticationFailed = (error) => {
    return {type: actionTypes.USER_AUTHENTICATION_FAILED, error: error}
}

export const logout =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("expirationDate")
    localStorage.removeItem("userId")
    return{ type : actionTypes.USER_LOGOUT}
}


export const authenticateUser = (authData, url) =>{
    return dispatch => {
        dispatch(userAuthenticationStart())
        axios.post(url, authData)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.userId)
                //const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                //localStorage.setItem('expirationDate', expirationDate)
                //dispatch(checkAuthTimeout(response.data.expiresIn))
                dispatch(userAuthenticationSuccess(response.data.userId, response.data.token, response.data.auth))
            })
            .catch(error => {
                console.log(error)
                dispatch(userAuthenticationFailed(error))
            })
    }
}



// export const checkAuthTimeout = (experationTime) =>{
//     return dispatch =>{
//         setTimeout(()=>{
//             dispatch(logout())
//         }, experationTime * 1000)
//     }
// }