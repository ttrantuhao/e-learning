import React, {createContext, useState} from 'react';
import {MyTheme} from "../globals/styles";

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(MyTheme.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeContext};
