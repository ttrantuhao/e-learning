import React, {useReducer} from 'react';
import {authenticationReducer} from "../reducer/authentication-reducer";
import {login, loginGoogle, logout, updateProfile} from "../action/authentication-action";


const AuthenticationContext = React.createContext();
const getInitialState = async () => {
        return {
            isAuthenticated: false,
            userInfo: null,
            token: null,
            errMessage: null,
            isAuthenticating: false,
        }
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
