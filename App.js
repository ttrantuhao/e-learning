import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {bgColor, MyDarkTheme} from "./src/globals/styles";
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from "./src/Navigation/MainNavigation";

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(MyDarkTheme.colors.card);

    return (
        <NavigationContainer theme={MyDarkTheme}>
            {/*<StatusBar backgroundColor={MyDarkTheme.colors.card} style={'dark'} />*/}
            {/*<ListCourseStack/>*/}
            <MainNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: bgColor
    },
});
