import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Home from "../components/Main/Home/home";
import CourseDetail from "../components/CourseDetail/course-detail";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' mode='modal'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={({route}) => (
                    {
                        title: 'Home',
                        headerRight: RightHeader
                    }
                )}
            />
            <Stack.Screen name='CourseDetail' component={CourseDetail}/>
        </Stack.Navigator>
    )
};

export default HomeStack;
