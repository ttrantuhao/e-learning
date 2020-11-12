import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListAll from "../components/Main/Search/ListAll/list-all";
import ListPath from "../components/Main/Search/ListPath/list-path";
import ListAuthor from "../components/Main/Search/ListAuthor/list-author";
import ListCourse from "../components/Course/ListCourse/list-course";

const Tab = createMaterialTopTabNavigator();


const SearchTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
        >
            <Tab.Screen name='ListAll' component={ListAll} options={{title: 'ALL'}}/>
            <Tab.Screen name='ListCourse' component={ListCourse} options={{title: 'COURSES'}}/>
            <Tab.Screen name='ListPath' component={ListPath} options={{title: 'PATHS'}}/>
            <Tab.Screen name='ListAuthor' component={ListAuthor} options={{title: 'AUTHORS'}}/>
        </Tab.Navigator>
    );
};

export default SearchTab;
