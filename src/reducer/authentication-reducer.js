import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCEEDED,
    LOGOUT_REQUEST, UPDATE_FAILED,
    UPDATE_PROFILE
} from "../action/authentication-action";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            AsyncStorage.setItem('userInfo', JSON.stringify(newState.userInfo));
            AsyncStorage.setItem('token', newState.token);
            // console.log("login success", newState);
            return newState;
        case LOGIN_FAILED:
            return {...prevState, isAuthenticating: false, isAuthenticated: false, errMessage: action.data.message}
        case LOGOUT_REQUEST:
            AsyncStorage.removeItem('userInfo');
            AsyncStorage.removeItem('token');
            return {...prevState, isAuthenticated: false}
        case UPDATE_PROFILE:
            AsyncStorage.setItem('userInfo', JSON.stringify(action.data.payload));
            return {...prevState, userInfo: action.data.payload, updateFailedMessage: null, isAuthenticating: false}
        case UPDATE_FAILED:
            // console.log(action.data.message)
            return {...prevState, updateFailedMessage: action.data.message, isAuthenticating: false}
        default:
            throw new Error()
    }
}
