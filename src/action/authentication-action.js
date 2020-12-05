import axios from 'axios'

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";


export const login = (dispatch) => (email, password) => {
    axios.post("http://api.dev.letstudy.org/user/login", {
        email,
        password
    }).then(response => {
        dispatch({type: LOGIN_SUCCEEDED,data: response.data})
    }).catch(err => {
        dispatch({type: LOGIN_FAILED, data: err.response.data})
    })
}

export const logout = (dispatch) => () => {
    dispatch({type: LOGOUT})
}

export const myRegister = (dispatch) => (email, password) => {
    axios.post("http://api.dev.letstudy.org//user/login", {
        email,
        password
    }).then(response => {
        if (response.status === 200)
            dispatch({
                type: "LOGIN_SUCCEEDED",
                data: response.data
            })
        else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch(err => {
        dispatch({type: "LOGIN_FAILED"})
    })
}
