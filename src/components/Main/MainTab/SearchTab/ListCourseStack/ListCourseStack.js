import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../../CourseDetail/course-detail";
import ListCourse from "../../../../Course/ListCourse/list-course";
import {screenKey} from "../../../../../globals/constants";

const ListCourseStackNavigator = createStackNavigator();

const ListCourseStack = () => {
    return (
        <ListCourseStackNavigator.Navigator initialRouteName='ListAll'>
            <ListCourseStackNavigator.Screen
                name='ListAll'
                component={ListCourse}
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
