import React from 'react';
import {StatusBar} from 'react-native';
import {MyDarkTheme} from "./src/globals/styles";
import 'react-native-gesture-handler'
import Profile from "./src/components/AccountManagement/Profile/profile";
import Browse from "./src/components/Main/Browse/browse";
import CourseDetail from "./src/components/CourseDetail/course-detail";
import {courses} from "./src/globals/mockData";


export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(MyDarkTheme.colors.card);

    return (
        // <NavigationContainer theme={MyDarkTheme}>
        //    <RootStack/>
        // </NavigationContainer>
        <CourseDetail item={courses[0]}/>
        // <CourseDetail/>
    );
}
