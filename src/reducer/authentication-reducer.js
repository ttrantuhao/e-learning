import {LOGIN_FAILED, LOGIN_SUCCEEDED, LOGOUT} from "../action/authentication-action";

export function reducer(prevState, action) {
    switch (action.type) {
        case LOGIN_SUCCEEDED:
            // console.log(action)
            return {...prevState, isAuthenticated: true, userInfo: action.data.userInfo, token: action.data.token, errMessage: null}
        case LOGIN_FAILED:
            // console.log(action);
            return {...prevState, isAuthenticated: false, errMessage: action.data.message}
        case LOGOUT:
            // console.log(action);
            return {...prevState, isAuthenticated: false, token: null, userInfo: null, errMessage: null}
        default:
            throw new Error()
    }
}
