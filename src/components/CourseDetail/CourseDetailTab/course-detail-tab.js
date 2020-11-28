import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React from "react";
import {screenKey} from "../../../globals/constants";
import ListLesson from "../ListLesson/list-lesson";
import ListComment from "../ListComment/list-comment";
import {ActivityIndicator, View} from "react-native";

const CourseDetailTabNavigator = createMaterialTopTabNavigator();

const CourseDetailTab = ({activeTab, onChange}) => {
    const DefaultScreen = () => (
        <View
            flex={1}
            py={20}
            alignItems="center"
            justifyContent="center"
            bg="background"
        >
            <ActivityIndicator size="large" color="white" animating/>
        </View>
    )

    return (
        <CourseDetailTabNavigator.Navigator
            tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
        >
            <CourseDetailTabNavigator.Screen name={screenKey.ListLesson}
                // component={
                //     activeTab === screenKey.ListLesson ? ListLesson : ListLesson
                // }
                                             component={ListLesson}
                                             options={{title: 'Lessons'}}
                // listeners={{ focus: () => onChange(screenKey.ListLesson) }}
            />
            <CourseDetailTabNavigator.Screen name={screenKey.ListComment}
                // component={
                //     activeTab === screenKey.ListComment ? ListComment : ListComment
                // }
                                             component={ListComment}
                                             options={{title: 'Comments'}}
                // listeners={{ focus: () => onChange(screenKey.ListComment) }}
            />
        </CourseDetailTabNavigator.Navigator>
    );
};

export default CourseDetailTab;
