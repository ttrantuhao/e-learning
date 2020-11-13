import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import RightHeader from "../components/Common/right-header";
import Search from "../components/Main/Search/search";
import SearchTab from "./SearchTab";

const Stack = createStackNavigator();

const SearchStack = () => {

    return (

        <Stack.Navigator initialRouteName='SearchTab' mode='modal'>
            <Stack.Screen
                name='SearchTab'
                component={SearchTab}
                options={({route}) => (
                    {
                        title: 'Search',
                        headerRight: RightHeader
                    }
                )}
            />
        </Stack.Navigator>
    )
};

export default SearchStack;
