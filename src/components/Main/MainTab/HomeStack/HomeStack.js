import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../../../Common/right-header";
import Home from "../../Home/home";
import CourseDetail from "../../../CourseDetail/course-detail";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import {screenKey} from "../../../../globals/constants";
import ListCourse from "../../../Course/ListCourse/list-course";

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeStackNavigator.Navigator initialRouteName='Home'>
            <HomeStackNavigator.Screen
                name={screenKey.HomeScreen}
                component={Home}
                options={({navigation}) => (
                    {
                        title: 'Home',
                        headerRight: () => (<RightHeader navigation={navigation}/>),
                        headerLeft: null
                    }
                )}
            />
            <HomeStackNavigator.Screen name={screenKey.SettingScreen} component={Setting}/>
            <HomeStackNavigator.Screen name={screenKey.ProfileScreen} component={Profile}/>
            <HomeStackNavigator.Screen
                name={screenKey.ListCourse}
                component={ListCourse}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <HomeStackNavigator.Screen
                name={screenKey.CourseDetailScreen}
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </HomeStackNavigator.Navigator>
    )
};

export default HomeStack;
