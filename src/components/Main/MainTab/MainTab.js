import React, {useContext} from 'react';
import {Icon} from "react-native-elements";
import Home from "../Home/home";
import Browse from "../Browse/browse";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack/HomeStack";
import BrowseStack from "./BrowseStack/BrowseStack";
import DownloadStack from "./DownloadStack/DownloadStack";
import SearchTab from "./SearchTab/SearchTab";
import {screenKey} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";

const MainTabNavigator = createBottomTabNavigator();

const MainTab = () => {
    const {theme} = useContext(ThemeContext);
    const tabBarIconFunc = ({route, focused, color, size}) => {
        let iconName;
        let iconType;
        if (route.name === screenKey.HomeStack) {
            iconName = 'home';
            iconType = 'antdesign';
        } else if (route.name === screenKey.DownloadStack) {
            iconName = 'file-download';
            iconType = 'material';
            size = size + 3;
        } else if (route.name === screenKey.BrowseStack) {
            iconName = 'nav-icon-grid';
            iconType = 'fontisto';
            size = size - 5;
        } else if (route.name === screenKey.SearchTab) {
            iconName = 'search';
            iconType = 'fontawesome';
            size = size + 5;
        }
        return <Icon name={iconName} type={iconType} size={size} color={color}/>;
    }


    return (
        <MainTabNavigator.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => tabBarIconFunc({route, focused, color, size}),
            })}
        >
            <MainTabNavigator.Screen name={screenKey.HomeStack} component={HomeStack} options={{title: 'Home'}}/>
            <MainTabNavigator.Screen name={screenKey.DownloadStack} component={DownloadStack} options={{title: 'Download'}}/>
            <MainTabNavigator.Screen name={screenKey.BrowseStack} component={BrowseStack} options={{title: 'Browse'}}/>
            <MainTabNavigator.Screen name={screenKey.SearchTab} component={SearchTab} options={{title: 'Search'}}/>
        </MainTabNavigator.Navigator>
    );
};

export default MainTab;
