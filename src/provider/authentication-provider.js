import React, {useState} from 'react';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true);
    const [authUser, setAuthUser] = useState({
        id: '123',
        email: 'tuhao99@gmail.com',
        name: 'tran tu hao',
        phone: '0932648392',
        avatar: '',
        type: '',
    });
    // const [authUser, setAuthUser] = useState(null);
    const [token, setToken] = useState('abc');
    // setIsAuth(true);
    // setAuthUser({
    //     email: 'tuhao99@gmail.com',
    //     fullname: 'Tran tu hao',
    //     token: 'abc'
    // })
    return (
        <AuthenticationContext.Provider value={{isAuth, setIsAuth, authUser, setAuthUser, token, setToken}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
