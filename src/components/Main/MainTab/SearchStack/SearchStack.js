import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../CourseDetail/course-detail";
import {screenKey} from "../../../../globals/constants";
import Search from "../../Search/search";

const SearchStackStackNavigator = createStackNavigator();

const SearchStack = () => {
    return (
        <SearchStackStackNavigator.Navigator mode='modal' headerMode='none'>
            <SearchStackStackNavigator.Screen
                name={screenKey.SearchScreen}
                component={Search}
                options={({navigation}) => (
                    {
                        // title: 'Like courses',
                        // headerRight: () => (<RightHeader navigation={navigation}/>),
                        // headerLeft: null
                        headerShown: false
                    }
                )}
            />
            <SearchStackStackNavigator.Screen
                name={screenKey.CourseDetailScreen}
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </SearchStackStackNavigator.Navigator>
    )
};

export default SearchStack;
