import React, {useContext, useEffect} from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView} from "react-native";
import WelcomeImage from "./WelcomeImage/welcome-image";
import {screenKey} from "../../../globals/constants";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {CourseContext} from "../../../provider/course-provider";

const Home = ({navigation}) => {
    const courseContext = useContext(CourseContext);
    const authContext = useContext(AuthenticationContext);
    useEffect(() => {
        courseContext.getNewCourse(10, 0);
        courseContext.getHotCourse( 10, 0);
        courseContext.getMyCourse(authContext.state.token);
        courseContext.getRecommendedCourse(authContext.state.userInfo.id, 10, 0);
    }, [])

    const onPressSeeAll = (courses, title) => {
        navigation.navigate(screenKey.ListCourse, {courses, title});
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <WelcomeImage/>
            {courseContext.state.isLoading && <MyActivityIndicator/>}
            <SectionCourse
                title='My courses'
                navigation={navigation}
                courses={courseContext.state.myCourse}
                onPressSeeAll={() => onPressSeeAll(courseContext.state.myCourse, 'My courses')}
            />
            <SectionCourse
                title='New courses'
                navigation={navigation}
                courses={courseContext.state.newCourse}
                onPressSeeAll={() => onPressSeeAll(courseContext.state.newCourse, 'New courses')}
            />
            <SectionCourse
                title='Hot courses'
                navigation={navigation}
                courses={courseContext.state.hotCourse}
                onPressSeeAll={() => onPressSeeAll(courseContext.state.hotCourse, 'Hot courses')}
            />
            <SectionCourse
                title='Recommended courses'
                navigation={navigation}
                courses={courseContext.state.reCourse}
                onPressSeeAll={() => onPressSeeAll(courseContext.state.reCourse, 'Recommended courses')}
            />
        </ScrollView>

    );
};

export default Home;
