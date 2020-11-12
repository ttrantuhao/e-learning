import React, {useEffect} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Browse from "../components/Main/Browse/browse";

const Stack = createStackNavigator();

const BrowseStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' mode='modal'>
            <Stack.Screen
                name='Home'
                component={Browse}
                options={({route}) => (
                    {
                        title: 'Browse',
                        headerRight: RightHeader
                    }
                )}
            />
        </Stack.Navigator>
    )
};

export default BrowseStack;
