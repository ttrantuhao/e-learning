import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ListAll from "../components/Main/Search/ListAll/list-all";
import CourseDetail from "../components/CourseDetail/course-detail";

const Stack = createStackNavigator();

const ListAllStack = () => {
    return (
        <Stack.Navigator initialRouteName='ListAll'>
            <Stack.Screen
                name='ListAll'
                component={ListAll}
                options={({route}) => (
                    {
                        headerShown: false
                    }
                )}
            />
            <Stack.screen
                name='CourseDetail'
                component={CourseDetail}
                options={() => (
                    {
                        headerShown: false
                    }
                )}
            />
        </Stack.Navigator>
    )
};

export default ListAllStack;
