import React, {useEffect, useReducer} from 'react';
import {authenticationReducer} from "../reducer/authentication-reducer";
import {login, loginGoogle, logout, updateProfile} from "../action/authentication-action";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthenticationContext = React.createContext();
const getInitialState = async () => {
    // const isAuth = await AsyncStorage.getItem('userInfo');

    // if (isAuth === null) {
        return {
            isAuthenticated: false,
            userInfo: null,
            token: null,
            errMessage: null,
            isAuthenticating: false,

        }
    // }
    // return {
    //     isAuthenticated: true,
    //     userInfo: await JSON.parse(AsyncStorage.getItem('userInfo')),
    //     token: await AsyncStorage.getItem('token'),
    //     errMessage: null,
    //     isAuthenticating: false,
    // }
}

const AuthenticationProvider = ({children}) => {
    const initialState = getInitialState();
    const [state, dispatch] = useReducer(authenticationReducer, initialState);

    return (
        <AuthenticationContext.Provider
            value={{
                state: state,
                login: login(dispatch),
                logout: logout(dispatch),
                loginGoogle: loginGoogle(dispatch),
                updateProfile: updateProfile(dispatch),
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
