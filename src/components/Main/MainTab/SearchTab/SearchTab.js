import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListAuthor from "../../Search/ListAuthor/list-author";
import ListAllStack from "./ListAllStack/ListAllStack";
import ListCourseStack from "./ListCourseStack/ListCourseStack";
import {screenKey} from "../../../../globals/constants";

const SearchTabNavigator = createMaterialTopTabNavigator();

const SearchTab = ({courses, authors}) => {
    const tabBarListeners = ({navigation, route}) => ({
        tabPress: () => navigation.navigate(route.name),
    });

    return (
        <SearchTabNavigator.Navigator
            tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
        >
            <SearchTabNavigator.Screen name={screenKey.ListAllStack} component={ListAllStack}
                                       options={{title: 'ALL'}}
                                       listeners={tabBarListeners}
                                       initialParams={{authors, courses}}
            />
            <SearchTabNavigator.Screen name={screenKey.ListCourseStack} component={ListCourseStack}
                                       options={{title: 'COURSES'}}
                                       listeners={tabBarListeners}
                                       initialParams={{courses}}
            />
            <SearchTabNavigator.Screen name={screenKey.ListAuthorScreen} component={ListAuthor}
                                       options={{title: 'AUTHORS'}}
                                       listeners={tabBarListeners}
                                       initialParams={{authors}}
            />
        </SearchTabNavigator.Navigator>
    );
};

export default SearchTab;
