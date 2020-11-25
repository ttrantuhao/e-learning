import React, {useEffect} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../../../Common/right-header";
import Browse from "../../Browse/browse";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import CourseDetail from "../../../CourseDetail/course-detail";
import {screenKey} from "../../../../globals/constants";

const BrowseStackNavigator = createStackNavigator();

const BrowseStack = () => {
    return (
        <BrowseStackNavigator.Navigator initialRouteName='Home' mode='modal'>
            <BrowseStackNavigator.Screen
                name={screenKey.BrowseScreen}
                component={Browse}
                options={({navigation}) => (
                    {
                        title: 'Browse',
                        headerRight: () => (<RightHeader navigation={navigation}/>),
                        headerLeft: null
                    }
                )}
            />
            <BrowseStackNavigator.Screen name={screenKey.SettingScreen} component={Setting}/>
            <BrowseStackNavigator.Screen name={screenKey.ProfileScreen} component={Profile}/>
        </BrowseStackNavigator.Navigator>
    )
};

export default BrowseStack;
