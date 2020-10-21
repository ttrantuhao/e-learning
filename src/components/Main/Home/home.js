import React from 'react';
import SectionCourses from "./SectionCourses/section-courses";
import {View, ScrollView} from "react-native";
import ImageButton from "../../Common/image-button";

const Home = () => {

    const onPressNewRelease = () => {
        console.log('on press new release!')
    }
    return (
        <ScrollView>
            <ImageButton title='NEW RELEASES' onPress={onPressNewRelease}/>
            <SectionCourses title='Continue learning'/>
            <SectionCourses title='Path'/>
            <SectionCourses title='Chanel'/>
            <SectionCourses title='Bookmarks'/>
        </ScrollView>

    );
};


export default Home;