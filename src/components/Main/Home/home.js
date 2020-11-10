import React from 'react';
import SectionCourses from "./SectionCourses/section-courses";
import {ScrollView} from "react-native";
import SectionPaths from "../../Common/SectionPaths/section-paths";
import {styles} from "./styles";
import WelcomeImage from "./WelcomeImage/welcome-image";

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <WelcomeImage/>
            <SectionCourses title='Software Development'/>
            <SectionCourses title='IT Operations'/>
            <SectionCourses title='Data professional'/>
            <SectionCourses title='Security professional'/>
            <SectionPaths title='My paths'/>
        </ScrollView>

    );
};


export default Home;
