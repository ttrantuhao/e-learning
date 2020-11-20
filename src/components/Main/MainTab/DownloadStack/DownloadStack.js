import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../../../Common/right-header";
import CourseDetail from "../../../CourseDetail/course-detail";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import Download from "../../Download/download";
import {screenKey} from "../../../../globals/constants";
import ListCourse from "../../../Course/ListCourse/list-course";

const DownloadStackNavigator = createStackNavigator();

const DownloadStack = () => {
    return (
        <DownloadStackNavigator.Navigator initialRouteName='Home'>
            <DownloadStackNavigator.Screen
                name={screenKey.ListCourse}
                component={ListCourse}
                options={({navigation}) => (
                    {
                        title: 'Download',
                        headerRight: () => (<RightHeader navigation={navigation}/>)
                    }
                )}
            />
            <DownloadStackNavigator.Screen name={screenKey.SettingScreen} component={Setting}/>
            <DownloadStackNavigator.Screen name={screenKey.ProfileScreen} component={Profile}/>
            <DownloadStackNavigator.Screen
                name={screenKey.CourseDetailScreen}
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </DownloadStackNavigator.Navigator>
    )
};

export default DownloadStack;
