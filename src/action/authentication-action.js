import axios from 'axios'
import {apiLogin} from "../core/services/authentication-service";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

const loginSucceeded = (data) => ({type: "LOGIN_SUCCEEDED", data})
const loginFailed= (data) => ({type: LOGIN_FAILED, data})
const logoutRequest= () => ({type: LOGOUT_REQUEST})

export const login = (dispatch) => (email, password) => {
    dispatch({type: LOGIN_REQUEST})
    apiLogin(email, password).then(response => {
        dispatch(loginSucceeded(response.data))
    }).catch(err => {
        dispatch(loginFailed(err.response.data))
    })
}

export const logout = (dispatch) => () => {dispatch(logoutRequest())}

export const myRegister = (dispatch) => (email, password) => {
    axios.post("http://api.dev.letstudy.org//user/login", {
        email,
        password
    }).then(response => {
        if (response.status === 200)
            dispatch(loginSucceeded(response.data))
        else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch(err => {
        dispatch({type: "LOGIN_FAILED"})
    })
}
