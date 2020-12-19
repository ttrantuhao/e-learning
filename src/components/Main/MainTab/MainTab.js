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
import Search from "../Search/search";
// import { createBottomTabNavigator } from 'react-navigation-tabs';

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
            // iconName = 'file-download';
            // iconType = 'material';
            iconName = 'like1'
            iconType = 'antdesign'
            size = size - 3;
        } else if (route.name === screenKey.BrowseStack) {
            iconName = 'nav-icon-grid';
            iconType = 'fontisto';
            size = size - 5;
        } else if (route.name === screenKey.SearchScreen) {
            iconName = 'search';
            iconType = 'fontawesome';
            size = size + 5;
        }
        return <Icon name={iconName} type={iconType} size={size} color={color}/>;
    }

    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => {
            return navigation.navigate(route.name)
        },
    });

    return (
        <MainTabNavigator.Navigator
            initialRouteName={screenKey.HomeStack}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => tabBarIconFunc({route, focused, color, size}),
            })}
        >
            <MainTabNavigator.Screen name={screenKey.HomeStack} component={HomeStack} options={{title: 'Home'}}
                                     listeners={tabBarListeners}
            />
            <MainTabNavigator.Screen name={screenKey.DownloadStack} component={DownloadStack} options={{title: 'Like'}}
                                     listeners={tabBarListeners}
            />
            <MainTabNavigator.Screen name={screenKey.BrowseStack} component={BrowseStack} options={{title: 'Browse'}}
                                     listeners={tabBarListeners}
            />
            <MainTabNavigator.Screen name={screenKey.SearchScreen} component={Search} options={{title: 'Search'}}
                                     listeners={tabBarListeners}
            />
        </MainTabNavigator.Navigator>
    );
};

export default MainTab;
