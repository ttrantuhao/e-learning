import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Share, StyleSheet, View} from 'react-native';
import MyVideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import SectionCourse from "../Main/Home/SectionCourse/section-course";
import CustomAlert from "../Common/custom-alert";
import CourseDetailTab from "./CourseDetailTab/course-detail-tab";
import {screenKey} from "../../globals/constants";
import {
    apiCheckOwnCourse,
    apiGetCourseDetail,
    apiGetCourseLikeStatus,
    apiLikeCourse,
    apiPaymentFreeCourse,
} from "../../core/services/course-service";
import MyActivityIndicator from "../Common/my-activity-indicator";
import {CourseContext} from "../../provider/course-provider";


const CourseDetail = ({route, navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    })

    const id = route.params.item.id;
    const [item, setItem] = useState(null);
    const [isOwn, setisOwn] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [visible, setVisible] = useState(false);
    const courseContext = useContext(CourseContext);
    const [urlVideo, setUrlVideo] = useState(null);
    // const playerRef = useRef(null);

    useEffect(() => {
        apiGetCourseDetail(id).then(async (res) => {
            setItem(res.data.payload);
            setUrlVideo(res.data.payload.section[0].lesson[0].videoUrl);
        }).catch(err => {
            console.log("err", err.response.data);
        })

        apiCheckOwnCourse(id).then(res => {
            setisOwn(res.data.payload.isUserOwnCourse);
        }).catch(err => {
            console.log("err", err.response.data);
        })

        apiGetCourseLikeStatus(id).then(res => {
            setIsLike(res.data.likeStatus);
        }).catch(err => {
            console.log("err", err.response.data);
        })
    }, []);

    const toggleLike = () => {
        apiLikeCourse(item.id).then(res => {
            setIsLike(!isLike)
        }).catch(err => {
            console.log("like course err: ", err.response.data);
        })
    }

    const onRegister = () => {
        if (!item.price) {
            apiPaymentFreeCourse(item.id).then(res => {
                setisOwn(true);
                setVisible(true);
                courseContext.getMyCourse();
            }).catch(err => {
                console.log("like course err: ", err.response.data);
            })
        }
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

    const onPressLesson = (url) => {
        setUrlVideo(url)
        console.log("lesson url video", url);
    }

    return (
        item ?
            <View style={styles.container}>
                <MyVideoPlayer url={urlVideo} onBack={()=>navigation.goBack()}/>
                {/*<Button title={'seek to'} onPress={() => playerRef.current.seekTo(20)}/>*/}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DescriptionLesson item={item}
                                       toggleLike={toggleLike}
                                       isLike={isLike}
                                       isOwn={isOwn}
                                       onShare={onPressShareBtn}
                                       onRegister={onRegister}
                    />
                    <CustomAlert title='Enroll course successfully!'
                                 message='This course is added to "my course" list'
                                 visible={visible}
                                 onOk={() => setVisible(false)}
                    />
                    <CourseDetailTab section={item.section} ratings={item.ratings.ratingList} courseId={item.id}
                                     image={item.imageUrl} onPressLesson={onPressLesson}/>
                    <SectionCourse title={'Related courses'} style={{margin: 10}} courses={item.coursesLikeCategory}
                                   navigation={navigation}
                                   onPressSeeAll={() => {
                                       navigation.navigate(screenKey.ListCourse, {courses: item.coursesLikeCategory, title: 'Related courses'});
                                   }}/>
                </ScrollView>
            </View> :
            <MyActivityIndicator style={{flex: 1}}/>
    );
};


export default CourseDetail;
