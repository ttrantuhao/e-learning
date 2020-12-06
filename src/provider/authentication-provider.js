import React, {useReducer} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {login, loginGoogle, logout} from "../action/authentication-action";

const AuthenticationContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    userInfo: null,
    token: null,
    errMessage: null,
    isAuthenticating: false
}

const AuthenticationProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthenticationContext.Provider
            value={{
                state,
                login: login(dispatch),
                logout: logout(dispatch),
                loginGoogle: loginGoogle(dispatch)
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
