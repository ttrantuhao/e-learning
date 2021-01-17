import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ListAll from "../../../Search/ListAll/list-all";
import {screenKey} from "../../../../../globals/constants";

const ListAllStackNavigator = createStackNavigator();

const ListAllStack = ({navigation, route}) => {
    return (
        <ListAllStackNavigator.Navigator initialRouteName='ListAll'>
            <ListAllStackNavigator.Screen
                name={screenKey.ListAllScreen}
                component={ListAll}
                options={{headerShown: false}}
                initialParams={{authors: route.params.authors, courses: route.params.courses}}
            />
        </ListAllStackNavigator.Navigator>
    )
};

export default ListAllStack;
