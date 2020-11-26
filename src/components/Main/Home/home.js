import React, {useContext} from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView, StyleSheet} from "react-native";
import WelcomeImage from "./WelcomeImage/welcome-image";
import {CourseContext} from "../../../provider/course-provider";
import {screenKey} from "../../../globals/constants";

const Home = ({navigation}) => {
    const {myCourses, newCourses, hotCourses} = useContext(CourseContext);
    const onPressSeeAll = (courses, title) => {
        navigation.navigate(screenKey.ListCourse, {courses, title});
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <WelcomeImage/>
            <SectionCourse
                title='My courses'
                navigation={navigation}
                courses={myCourses}
                onPressSeeAll={() => onPressSeeAll(myCourses, 'My courses')}
            />
            <SectionCourse
                title='New courses'
                navigation={navigation}
                courses={newCourses}
                onPressSeeAll={() => onPressSeeAll(newCourses, 'New courses')}
            />
            <SectionCourse
                title='Hot courses'
                navigation={navigation}
                courses={hotCourses}
                onPressSeeAll={() => onPressSeeAll(hotCourses, 'Hot courses')}
            />
            <SectionCourse
                title='Recommended courses'
                navigation={navigation}
                courses={hotCourses}
                onPressSeeAll={() => onPressSeeAll(hotCourses, 'Recommended courses')}
            />
            {/*<SectionPaths title='My paths'/>*/}
        </ScrollView>

    );
};

export default Home;
