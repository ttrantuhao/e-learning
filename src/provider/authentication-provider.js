import React, {useState} from 'react';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true);
    const [authUser, setAuthUser] = useState({
        email: 'tuhao99@gmail.com',
        fullName: 'Tran tu hao',
        token: 'abc'
    });

    // setIsAuth(true);
    // setAuthUser({
    //     email: 'tuhao99@gmail.com',
    //     fullname: 'Tran tu hao',
    //     token: 'abc'
    // })
    return (
        <AuthenticationContext.Provider value={{isAuth, setIsAuth, authUser, setAuthUser}}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
