import React, {useContext} from 'react';
import MainTab from "./components/Main/MainTab/MainTab";
import Login from "./components/Authentication/Login/login";
import Register from "./components/Authentication/Register/register";
import ForgetPassword from "./components/Authentication/FogetPassword/forget-password";
import {createStackNavigator} from "@react-navigation/stack";
import {screenKey} from "./globals/constants";
import {AuthenticationContext} from "./provider/authentication-provider";

const Stack = createStackNavigator();

const RootStack = () => {
    const authContext = useContext(AuthenticationContext);

    return (
        authContext.state.isAuthenticated ? (
            <Stack.Navigator
                headerMode={false}
                mode="modal"
            >
                <Stack.Screen
                    name={screenKey.MainTab}
                    component={MainTab}
                    options={{headerShown: false}}
                />

            </Stack.Navigator>
        ) : (
            <Stack.Navigator initialRouteName={screenKey.LoginScreen}>
                <Stack.Screen
                    name={screenKey.LoginScreen}
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screenKey.RegisterScreen}
                    component={Register}
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
