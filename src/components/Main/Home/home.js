import React from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView, StyleSheet} from "react-native";
import SectionPaths from "../../Common/SectionPaths/section-paths";
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

export const styles = StyleSheet.create({
    container: {
        // backgroundColor:  bgColor,
        // paddingLeft: 10,
        // paddingRight: 10,
    }
})

export default Home;
