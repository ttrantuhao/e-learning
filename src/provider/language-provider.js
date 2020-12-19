import React, {useState} from 'react';
const LanguageContext = React.createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState();

    // const toggleTheme = () => {
    //     if (language === MyTheme.light)
    //         setTheme(MyTheme.dark);
    //     else
    //         setTheme(MyTheme.light);
    // }
    return (
        <LanguageContext.Provider value={{}}>
            {children}
        </LanguageContext.Provider>
    );
};

export {LanguageProvider, LanguageContext};
