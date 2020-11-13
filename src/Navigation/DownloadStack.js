import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Home from "../components/Main/Home/home";
import CourseDetail from "../components/CourseDetail/course-detail";
import Setting from "../components/AccountManagement/Setting/setting";
import Profile from "../components/AccountManagement/Profile/profile";
import Download from "../components/Main/Download/download";

const Stack = createStackNavigator();

const DownloadStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Download'
                component={Download}
                options={({route}) => (
                    {
                        title: 'Download',
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

export default DownloadStack;
