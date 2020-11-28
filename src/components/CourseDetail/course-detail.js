import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View, Share, ActivityIndicator, Box} from 'react-native';
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import ListLesson from "./ListLesson/list-lesson";
import {courses} from "../../globals/mockData";
import SectionCourse from "../Main/Home/SectionCourse/section-course";
import {CourseContext} from "../../provider/course-provider";
import CustomAlert from "../Common/custom-alert";
import CourseDetailTab from "./CourseDetailTab/course-detail-tab";
import {screenKey} from "../../globals/constants";

const CourseDetail = ({route, navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    })

    const {favoriteCourses, setFavoriteCourses, myCourses, setMyCourses} = useContext(CourseContext);
    const item = route.params.item;
    const [isFavorite, setIsFavorite] = useState(item.isFavorite);
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(screenKey.ListLesson) //your default (first) tab

    const toggleFavorite = (item) => {
        if (item.isFavorite) {
            item.isFavorite = false
            setFavoriteCourses(favoriteCourses.filter((fItem) => fItem.id !== item.id));
        } else {
            item.isFavorite = true;
            setFavoriteCourses([...favoriteCourses, item]);
        }
        setIsFavorite(!isFavorite);
    }

    const onRegister = (item) => {
        item.isMine = true;
        setMyCourses([...myCourses, item]);
        setVisible(true);
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
                <DescriptionLesson item={item} toggleFavorite={toggleFavorite} isFavorite={isFavorite}
                                   onShare={onPressShareBtn}
                                   onRegister={onRegister}
                />
                <CustomAlert title='Enroll course successfully!'
                             message='This course is added to "my course" list'
                             visible={visible}
                             onOk={() => setVisible(false)}
                />
                <CourseDetailTab activeTab={activeTab} onChange={(tab) => setActiveTab(tab)}/>
                <SectionCourse title={'Related courses'} style={{margin: 10}} courses={courses}
                               navigation={navigation}/>
            </ScrollView>

        </View>
    );
};


export default CourseDetail;
