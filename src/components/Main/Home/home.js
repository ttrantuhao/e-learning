import React from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView} from "react-native";
import SectionPaths from "../../Common/SectionPaths/section-paths";
import {styles} from "./styles";
import WelcomeImage from "./WelcomeImage/welcome-image";

const Home = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <WelcomeImage/>
            <SectionCourse title='Software Development' navigation={navigation}/>
            <SectionCourse title='IT Operations' navigation={navigation}/>
            <SectionCourse title='Data professional' navigation={navigation}/>
            <SectionCourse title='Security professional' navigation={navigation}/>
            <SectionPaths title='My paths'/>
        </ScrollView>

    );
};


export default Home;
