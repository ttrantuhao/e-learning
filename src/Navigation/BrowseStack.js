import React, {useEffect} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Browse from "../components/Main/Browse/browse";
import Setting from "../components/AccountManagement/Setting/setting";
import Profile from "../components/AccountManagement/Profile/profile";
import CourseDetail from "../components/CourseDetail/course-detail";

const Stack = createStackNavigator();

const BrowseStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='Home' mode='modal'>
            <Stack.Screen
                name='Home'
                component={Browse}
                options={({route}) => (
                    {
                        title: 'Browse',
                        headerRight: () => (<RightHeader navigation={navigation}/>)
                    }
                )}
            />
            <Stack.Screen name='Setting' component={Setting}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    )
};

export default BrowseStack;
