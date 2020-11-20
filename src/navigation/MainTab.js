import React from 'react';
import {Icon} from "react-native-elements";
import Home from "../components/Main/Home/home";
import Browse from "../components/Main/Browse/browse";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import BrowseStack from "./BrowseStack";
import DownloadStack from "./DownloadStack";
import SearchTab from "./SearchTab";

const Tab = createBottomTabNavigator();

const MainTab = () => {
    const tabBarIconFunc = ({route, focused, color, size}) => {
        let iconName;
        let iconType;
        if (route.name === 'HomeStack') {
            iconName = 'home';
            iconType = 'antdesign';
        } else if (route.name === 'DownloadStack') {
            iconName = 'file-download';
            iconType = 'material';
            size = size + 3;
        } else if (route.name === 'BrowseStack') {
            iconName = 'nav-icon-grid';
            iconType = 'fontisto';
            size = size - 5;
        } else if (route.name === 'SearchStack') {
            iconName = 'search';
            iconType = 'fontawesome';
            size = size + 5;
        }
        return <Icon name={iconName} type={iconType} size={size} color={color}/>;
    }


    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => tabBarIconFunc({route, focused, color, size}),
            })}
        >
            <Tab.Screen name='HomeStack' component={HomeStack} options={{title: 'Home'}}/>
            <Tab.Screen name='DownloadStack' component={DownloadStack} options={{title: 'Download'}}/>
            <Tab.Screen name='BrowseStack' component={BrowseStack} options={{title: 'Browse'}}/>
            <Tab.Screen name='SearchStack' component={SearchTab} options={{title: 'Search'}}/>
        </Tab.Navigator>
    );
};

export default MainTab;