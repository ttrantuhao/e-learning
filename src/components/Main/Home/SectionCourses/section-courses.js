import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from "react-native";
import CourseItem from "./CoursesItem/course-item";
import {courses} from "../../../../globals/mockData";
import ListHeader from "../../../Common/list-header";

const SectionCourses = ({title}) => {
    return (
        <View style={styles.container}>
            <ListHeader title={title}/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({item}) => (<CourseItem item={item}/>)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    }
})

export default SectionCourses;
