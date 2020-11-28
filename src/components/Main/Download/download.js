import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import ListCourse from "../../Course/ListCourse/list-course";
import {CourseContext} from "../../../provider/course-provider";

const Download = ({navigation}) => {
    const {favoriteCourses} = useContext(CourseContext);
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        }
    })
    return (
        <View style={styles.container}>
            <ListCourse navigation={navigation} courses={favoriteCourses}/>
        </View>
    );
};


export default Download;
