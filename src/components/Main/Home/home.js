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
    useEffect(() => {
        courseContext.getNewCourse(10, 1);
        courseContext.getHotCourse( 10, 1);
        courseContext.getMyCourse();
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
        </ScrollView>

    );
};

export default Home;
