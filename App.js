import React from 'react';
import {StatusBar} from 'react-native';
import {MyDarkTheme} from "./src/globals/styles";
import 'react-native-gesture-handler'
import RootStack from "./src/Navigation/RootStack";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(MyDarkTheme.colors.card);

    return (
        <NavigationContainer theme={MyDarkTheme}>
           <RootStack/>
        </NavigationContainer>
        // <CourseDetail item={courses[0]}/>
        // <Setting/>
    );
}
