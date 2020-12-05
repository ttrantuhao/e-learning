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
    // const [isAuth, setIsAuth] = useState(true);
    // const [authUser, setAuthUser] = useState({
    //     id: '123',
    //     email: 'tuhao99@gmail.com',
    //     name: 'tran tu hao',
    //     phone: '0932648392',
    //     avatar: '',
    //     type: '',
    // });
    // const [authUser, setAuthUser] = useState(null);
    // const [token, setToken] = useState('abc');
    // setIsAuth(true);
    // setAuthUser({
    //     email: 'tuhao99@gmail.com',
    //     fullname: 'Tran tu hao',
    //     token: 'abc'
    // })

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
