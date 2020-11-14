import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../components/CourseDetail/course-detail";
import ListAll from "../components/Main/Search/ListAll/list-all";

const Stack = createStackNavigator();

const ListCourseStack = () => {
    return (
        <Stack.Navigator initialRouteName='ListAll'>
            <Stack.Screen
                name='ListAll'
                component={ListAll}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='CourseDetail'
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </Stack.Navigator>
    )
};

export default ListCourseStack;
