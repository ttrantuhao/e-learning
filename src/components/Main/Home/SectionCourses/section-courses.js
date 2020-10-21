import React from 'react';
import {View, Text, ScrollView} from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: "React Native",
            author: "Hao Tran",
            level: "Advance",
            released: "Oct 21th, 2020",
            duration: "20 hours"
        },
        {
            id: 2,
            title: "IOS Development",
            author: "Hao Tran",
            level: "Beginner",
            released: "Oct 26th, 2020",
            duration: "25 hours"
        },
        {
            id: 3,
            title: "Android Development",
            author: "Hao Tran",
            level: "Beginner",
            released: "Oct 26th, 2020",
            duration: "25 hours"
        }
    ];

    const renderListItems =  (courses) => {
        return courses.map((item) => <SectionCoursesItem item={item} key={item.id}/>);
    }

    return (
        <View>
            <View>
                <Text>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>
    );
};

export default SectionCourses;