import React, {useState} from 'react';
import {MyTheme} from "../globals/styles";

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(MyTheme.light);

    const toggleTheme = () => {
        if (theme === MyTheme.light)
            setTheme(MyTheme.dark);
        else
            setTheme(MyTheme.light);
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeContext};
