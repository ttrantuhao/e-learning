import React, {useContext} from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView, StyleSheet} from "react-native";
import WelcomeImage from "./WelcomeImage/welcome-image";
import {CourseContext} from "../../../provider/course-provider";

const Home = ({navigation}) => {
    const {myCourses, newCourses, hotCourses} = useContext(CourseContext);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <WelcomeImage/>
            <SectionCourse title='My courses' navigation={navigation} courses={myCourses}/>
            <SectionCourse title='New courses' navigation={navigation} courses={newCourses}/>
            <SectionCourse title='Hot courses' navigation={navigation} courses={hotCourses}/>
            <SectionCourse title='Recommended courses' navigation={navigation} courses={hotCourses}/>
            {/*<SectionPaths title='My paths'/>*/}
        </ScrollView>

    );
};

export default Home;
