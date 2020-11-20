import React, {useEffect} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../../../Common/right-header";
import Browse from "../../Browse/browse";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import CourseDetail from "../../../CourseDetail/course-detail";

const BrowseStackNavigtor = createStackNavigator();

const BrowseStack = () => {
    return (
        <BrowseStackNavigtor.Navigator initialRouteName='Home' mode='modal'>
            <BrowseStackNavigtor.Screen
                name='Home'
                component={Browse}
                options={({navigation}) => (
                    {
                        title: 'Browse',
                        headerRight: () => (<RightHeader navigation={navigation}/>)
                    }
                )}
            />
            <BrowseStackNavigtor.Screen name='Setting' component={Setting}/>
            <BrowseStackNavigtor.Screen name='Profile' component={Profile}/>
        </BrowseStackNavigtor.Navigator>
    )
};

export default BrowseStack;
