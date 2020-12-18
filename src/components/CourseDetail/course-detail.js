import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Share} from 'react-native';
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import {courses} from "../../globals/mockData";
import SectionCourse from "../Main/Home/SectionCourse/section-course";
import {CourseContext} from "../../provider/course-provider";
import CustomAlert from "../Common/custom-alert";
import CourseDetailTab from "./CourseDetailTab/course-detail-tab";
import {screenKey} from "../../globals/constants";
import {
    apiCheckOwnCourse,
    apiGetCourseDetail,
    apiGetCourseLikeStatus, apiLikeCourse,
    checkOwnCourse
} from "../../core/services/course-service";
import MyActivityIndicator from "../Common/my-activity-indicator";

const CourseDetail = ({route, navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    })

    // const {favoriteCourses, setFavoriteCourses, myCourses, setMyCourses} = useContext(CourseContext);
    // const item = route.params.item;
    const id = route.params.item.id;
    const [item, setItem] = useState(null);
    const [isOwn, setisOwn] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        apiGetCourseDetail(id).then(async (res) => {
            setItem(res.data.payload);
        }).catch(err => {
            console.log("err", err.response.error.message);
        })

        apiCheckOwnCourse(id).then(res => {
            setisOwn(res.data.payload.isUserOwnCourse);
        }).catch(err => {
            console.log("err", err.response.error.message);
        })

        apiGetCourseLikeStatus(id).then(res => {
            setIsLike(res.data.likeStatus);
        }).catch(err => {
            console.log("err", err.response.error.message);
        })
    }, []);

    const toggleLike = () => {
        // if (item.isFavorite) {
        //     item.isFavorite = false
        //     setFavoriteCourses(favoriteCourses.filter((fItem) => fItem.id !== item.id));
        // } else {
        //     item.isFavorite = true;
        //     setFavoriteCourses([...favoriteCourses, item]);
        // }
        // setIsFavorite(!isFavorite);
        apiLikeCourse(item.id).then(res => {
            setIsLike(!isLike)
        }).catch(err => {
            console.log("like course err: ", err.response.message);
        })
    }

    // const onRegister = (item) => {
    //     item.isMine = true;
    //     setMyCourses([...myCourses, item]);
    //     setVisible(true);
    // }

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
        item ?
        <View style={styles.container}>
            <VideoPlayer/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DescriptionLesson item={item}
                                   toggleLike={toggleLike}
                                   isLike={isLike}
                                   isOwn={isOwn}
                                   onShare={onPressShareBtn}
                                   // onRegister={onRegister}
                />
                <CustomAlert title='Enroll course successfully!'
                             message='This course is added to "my course" list'
                             visible={visible}
                             onOk={() => setVisible(false)}
                />
                <CourseDetailTab section={item.section} ratings={item.ratings.ratingList} courseId={item.id} image={item.imageUrl}/>
                <SectionCourse title={'Related courses'} style={{margin: 10}} courses={item.coursesLikeCategory}
                               navigation={navigation}/>
            </ScrollView>
        </View> :
            <MyActivityIndicator style={{flex: 1}}/>
    );
};


export default CourseDetail;
