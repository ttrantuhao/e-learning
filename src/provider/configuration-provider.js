import React, {createContext, useState} from 'react';
import {MyTheme} from "../globals/styles";

const ConfigurationContext = React.createContext();

const ConfigurationProvider = ({children}) => {
    const [theme, setTheme] = useState(MyTheme.dark);

    return (
        <ConfigurationContext.Provider value={{theme, setTheme}}>
            {children}
        </ConfigurationContext.Provider>
    );
};

export {ConfigurationProvider, ConfigurationContext};
