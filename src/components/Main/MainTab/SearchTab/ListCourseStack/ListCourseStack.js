import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {screenKey} from "../../../../../globals/constants";
import ListCourseSearch from "../../../Search/ListCourseSearch/list-course-search";

const ListCourseStackNavigator = createStackNavigator();

const ListCourseStack = ({navigation, route}) => {
    return (
        <ListCourseStackNavigator.Navigator>
            <ListCourseStackNavigator.Screen
                name={screenKey.ListCourseSearch}
                component={ListCourseSearch}
                options={{headerShown: false}}
                initialParams={{courses:  route.params.courses}}
            />
        </ListCourseStackNavigator.Navigator>
    )
};

export default ListCourseStack;
