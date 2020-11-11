import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListCourses from "../../../Courses/ListCourses/list-courses";

const SearchCourse = () => {
    return (
        <View style={styles.container}>
            <ListCourses/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default SearchCourse;
