import {apiLogin, apiLoginGoogle} from "../core/services/authentication-service";
import {apiUpdateProfile} from "../core/services/user-service";


export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const UPDATE_FAILED = "UPDATE_FAILED";
const loginSucceeded = (data) => ({type: "LOGIN_SUCCEEDED", data})
const loginFailed = (data) => ({type: LOGIN_FAILED, data})
const logoutRequest = () => ({type: LOGOUT_REQUEST})

export const login = (dispatch) => (email, password) => {
    dispatch({type: LOGIN_REQUEST})
    apiLogin(email, password).then(response => {
        dispatch(loginSucceeded(response.data))
    }).catch(err => {
        dispatch(loginFailed(err.response.data))
    })
}

export const logout = (dispatch) => () => {
    dispatch(logoutRequest())
}

export const loginGoogle = (dispatch) => () => {
    dispatch({type: LOGIN_REQUEST})
    apiLoginGoogle().then(response => {
        dispatch(loginSucceeded(response.data))
    }).catch(err => {
        dispatch(loginFailed(err.response.data))
    })
}

export const updateProfile = (dispatch) => (name, phone) => {
    // dispatch({type: LOGIN_REQUEST})
    apiUpdateProfile(name, null, phone).then(response => {
        // console.log("apiGetNewCourse", response.data.payload)
        dispatch({
            type: UPDATE_PROFILE,
            data: response.data
        })
    }).catch(err => {
        dispatch({
            type: UPDATE_FAILED,
            data: err.response.data
        })
    })
}
