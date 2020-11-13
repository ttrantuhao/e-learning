import React, {useState} from 'react';
import MainTab from "./MainTab";
import Login from "../components/Authentication/Login/login";
import Register from "../components/Authentication/Register/register";
import VerifyPassword from "../components/Authentication/VerifyPassword/verify-password";
import ForgetPassword from "../components/Authentication/FogetPassword/forget-password";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../components/Main/Home/home";
import ListCourse from "../components/Course/ListCourse/list-course";
import Setting from "../components/AccountManagement/Setting/setting";
import Profile from "../components/AccountManagement/Profile/profile";
import CourseDetail from "../components/CourseDetail/course-detail";
import {SearchBar} from "react-native-elements";

const Stack = createStackNavigator();

const RootStack = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);

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
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{headerShown: false}}
                    initialParams={{loginFunc: handleLogin}}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='VerifyPassword'
                    component={VerifyPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='ForgetPassword'
                    component={ForgetPassword}
                    options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    );
}

export default RootStack;
