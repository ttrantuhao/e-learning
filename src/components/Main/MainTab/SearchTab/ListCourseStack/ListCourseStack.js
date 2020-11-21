import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../../CourseDetail/course-detail";
import ListCourse from "../../../../Course/ListCourse/list-course";
import {screenKey} from "../../../../../globals/constants";
import ListCourseSearch from "../../../Search/ListCourseSearch/list-course-search";

const ListCourseStackNavigator = createStackNavigator();

const ListCourseStack = () => {
    return (
        <ListCourseStackNavigator.Navigator initialRouteName='ListAll'>
            <ListCourseStackNavigator.Screen
                name={screenKey.ListCourse}
                component={ListCourseSearch}
                options={{headerShown: false}}
            />
            <ListCourseStackNavigator.Screen
                name={screenKey.CourseDetailScreen}
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </ListCourseStackNavigator.Navigator>
    )
};

export default ListCourseStack;
