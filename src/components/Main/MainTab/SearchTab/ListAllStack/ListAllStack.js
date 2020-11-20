import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../../CourseDetail/course-detail";
import ListAll from "../../../Search/ListAll/list-all";
import {screenKey} from "../../../../../globals/constants";

const ListAllStackNavigator = createStackNavigator();

const ListAllStack = () => {
    return (
        <ListAllStackNavigator.Navigator initialRouteName='ListAll'>
            <ListAllStackNavigator.Screen
                name='ListAll'
                component={ListAll}
                options={{headerShown: false}}
            />
            <ListAllStackNavigator.Screen
                name={screenKey.CourseDetailScreen}
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </ListAllStackNavigator.Navigator>
    )
};

export default ListAllStack;
