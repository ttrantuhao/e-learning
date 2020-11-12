import React from 'react';
import ListCourse from "../components/Course/ListCourse/list-course";
import CourseDetail from "../components/CourseDetail/course-detail";
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";

const Stack = createStackNavigator();

const ListCourseStack = () => {
    return (
        <Stack.Navigator initialRouteName='ListCourse' mode='modal'>
            <Stack.Screen
                name='ListCourse'
                component={ListCourse}
                options={({route}) => (
                    {
                        title: 'Download',
                        headerRight: RightHeader
                    }
                )}
            />
            <Stack.Screen
                name='CourseDetail'
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        //headerShown: false
                    }
                )}
            />
        </Stack.Navigator>
    )
};

export default ListCourseStack;
