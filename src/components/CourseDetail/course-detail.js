import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {bgColor, myWhite} from "../../globals/styles";
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import ListLesson from "./ListLesson/list-lesson";
import {courses} from "../../globals/mockData";
import {ThemeContext} from "../../provider/theme-provider";
import SectionCourse from "../Main/Home/SectionCourse/section-course";
import {CourseContext} from "../../provider/course-provider";

const CourseDetail = ({route, navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    })

    const {favoriteCourses, setFavoriteCourses} = useContext(CourseContext);
    const addFavoriteCourse = (item) => {
        setFavoriteCourses([...favoriteCourses, item]);
    }

    const removeFavoriteCourse = (id) => {
        setFavoriteCourses(favoriteCourses.filter((item) => item.id !== id));
    }

    const item = route.params.item;
    return (
        <View style={styles.container}>
            <VideoPlayer/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DescriptionLesson item={item} addFavorite={addFavoriteCourse} removeFavorite={removeFavoriteCourse}/>
                <ListLesson/>
                <SectionCourse title={'Related courses'} style={{margin: 10}} courses={courses} navigation={navigation}/>
            </ScrollView>

        </View>
    );
};



export default CourseDetail;
