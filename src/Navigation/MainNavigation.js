import React from 'react';
import {View} from 'react-native';
import {Icon} from "react-native-elements";
import Home from "../components/Main/Home/home";
import Browse from "../components/Main/Browse/browse";
import Search from "../components/Main/Search/search";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ListCourseStack from "./ListCourseStack";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    const tabBarIconFunc = ({route, focused, color, size}) => {
        let iconName;
        let iconType;
        if (route.name === 'Home') {
            iconName = 'home';
            iconType = 'antdesign';
        } else if (route.name === 'Download') {
            iconName = 'file-download';
            iconType = 'material';
            size = size + 3;
        } else if (route.name === 'Browse') {
            iconName = 'nav-icon-grid';
            iconType = 'fontisto';
            size = size - 5;
        } else if (route.name === 'Search') {
            iconName = 'search';
            iconType = 'fontawesome';
            size = size + 5;
        }
        return <Icon name={iconName} type={iconType} size={size} color={color}/>;
    }


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => tabBarIconFunc({route, focused, color, size}),
            })}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Download' component={ListCourseStack}/>
            <Tab.Screen name='Browse' component={Browse}/>
            <Tab.Screen name='Search' component={Search}/>
        </Tab.Navigator>
    );
};

export default MainNavigation;
