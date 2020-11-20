import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Home from "../components/Main/Home/home";
import CourseDetail from "../components/CourseDetail/course-detail";
import Setting from "../components/AccountManagement/Setting/setting";
import Profile from "../components/AccountManagement/Profile/profile";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' mode='modal'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={({navigation}) => (
                    {
                        title: 'Home',
                        headerRight: () => (<RightHeader navigation={navigation}/>)
                    }
                )}
            />
            <Stack.Screen name='Setting' component={Setting}/>
            <Stack.Screen name='Profile' component={Profile}/>
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

export default HomeStack;
