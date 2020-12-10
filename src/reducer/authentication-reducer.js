import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGOUT_REQUEST} from "../action/authentication-action";

export function authenticationReducer(prevState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...prevState, isAuthenticating: true}
        case LOGIN_SUCCEEDED:
            const newState = {
                ...prevState,
                isAuthenticating: false,
                isAuthenticated: true,
                userInfo: action.data.userInfo,
                token: action.data.token,
                errMessage: null
            }
            // console.log("login success", newState);
            return newState;
        case LOGIN_FAILED:
            return {...prevState, isAuthenticating: false, isAuthenticated: false, errMessage: action.data.message}
        case LOGOUT_REQUEST:
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error()
    }
}
