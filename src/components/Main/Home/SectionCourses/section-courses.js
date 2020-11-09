import React from 'react';
import {View, Text, ScrollView} from "react-native";
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";
import {sectionCourses} from "../../../../globals/mockData";

const SectionCourses = (props) => {
    const renderListItems =  (courses) => {
        return courses.map((item) => <SectionCoursesItem item={item} key={item.id}/>);
    }

    return (
        <View>
            <View>
                <Text>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItems(sectionCourses)}
            </ScrollView>
        </View>
    );
};

export default SectionCourses;
