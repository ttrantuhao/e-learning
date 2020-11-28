import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React from "react";
import {screenKey} from "../../../globals/constants";
import ListLesson from "../ListLesson/list-lesson";
import ListComment from "../ListComment/list-comment";

const CourseDetailTabNavigator = createMaterialTopTabNavigator();

const CourseDetailTab = () => {
    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => navigation.navigate(route.name),
    });

    return (
        <CourseDetailTabNavigator.Navigator
            tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
        >
            <CourseDetailTabNavigator.Screen name={screenKey.ListLesson} component={ListLesson}
                                             options={{title: 'Lessons'}}
                                             listeners={tabBarListeners}
            />
            <CourseDetailTabNavigator.Screen name={screenKey.ListComment} component={ListComment}
                                             options={{title: 'Comments'}}
                                             listeners={tabBarListeners}
            />
        </CourseDetailTabNavigator.Navigator>
    );
};

export default CourseDetailTab;
