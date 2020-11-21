import React, {useContext, useState} from 'react';
import MainTab from "./components/Main/MainTab/MainTab";
import Login from "./components/Authentication/Login/login";
import Register from "./components/Authentication/Register/register";
import VerifyPassword from "./components/Authentication/VerifyPassword/verify-password";
import ForgetPassword from "./components/Authentication/FogetPassword/forget-password";
import {createStackNavigator} from "@react-navigation/stack";
import {screenKey} from "./globals/constants";
import {ThemeContext} from "./provider/theme-provider";

const Stack = createStackNavigator();

const RootStack = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const {theme} = useContext(ThemeContext);

    const handleLogin = () => {
        setIsSignedIn(true);
    }

    const handleLogout = () => {
        setIsSignedIn(true);
    }

    return (
        isSignedIn ? (
            <MainTab/>
        ) : (
            <Stack.Navigator >
                <Stack.Screen
                    name={screenKey.LoginScreen}
                    component={Login}
                    options={{headerShown: false}}
                    initialParams={{loginFunc: handleLogin}}
                />
                <Stack.Screen
                    name={screenKey.RegisterScreen}
                    component={Register}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screenKey.VerifyPasswordScreen}
                    component={VerifyPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screenKey.ForgetPasswordScreen}
                    component={ForgetPassword}
                    options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    );
}

export default RootStack;
