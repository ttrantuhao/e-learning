import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View, Share} from 'react-native';
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import ListLesson from "./ListLesson/list-lesson";
import {courses} from "../../globals/mockData";
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
    const item = route.params.item;
    const [isFavorite, setIsFavorite] = useState(item.isFavorite);

    const toggleFavorite = (item) => {
        if (item.isFavorite) {
            setFavoriteCourses(favoriteCourses.filter((item) => item.id !== id));
        } else {
            item.isFavorite = true;
            setFavoriteCourses([...favoriteCourses, item]);
        }
        setIsFavorite(!isFavorite);
    }

    const onPressShareBtn = async (item) => {
        try {
            const result = await Share.share({
                message: `${item.title} - try this course!`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <VideoPlayer/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DescriptionLesson item={item} toggleFavorite={toggleFavorite} isFavorite={isFavorite} onShare={onPressShareBtn}/>
                <ListLesson/>
                <SectionCourse title={'Related courses'} style={{margin: 10}} courses={courses}
                               navigation={navigation}/>
            </ScrollView>

        </View>
    );
};


export default CourseDetail;
