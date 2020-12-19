import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'
import RootStack from "./src/RootStack";
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {ThemeContext, ThemeProvider} from "./src/provider/theme-provider";
import {AuthenticationProvider} from "./src/provider/authentication-provider";
import {CourseProvider} from "./src/provider/course-provider";
import {LanguageProvider} from "./src/provider/language-provider";

function MyNavigationContainer() {
    const {theme} = useContext(ThemeContext);

    StatusBar.setBarStyle(theme.barStyle);
    StatusBar.setTranslucent(true);
    return (
        <NavigationContainer theme={theme}>
            <MenuProvider>
                <RootStack/>
            </MenuProvider>
        </NavigationContainer>
    )
}

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthenticationProvider>
                    <CourseProvider>
                        <MyNavigationContainer/>
                    </CourseProvider>
                </AuthenticationProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}
