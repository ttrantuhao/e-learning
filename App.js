import React from 'react';
import {StatusBar} from 'react-native';
import {MyDarkTheme} from "./src/globals/styles";
import 'react-native-gesture-handler'
import RootStack from "./src/RootStack";
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(MyDarkTheme.colors.card);

    return (
        <NavigationContainer theme={MyDarkTheme}>
            <MenuProvider>
                <RootStack/>
            </MenuProvider>
        </NavigationContainer>
    );
}
