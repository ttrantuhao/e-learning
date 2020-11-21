import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {bgColor, myWhite} from "../../globals/styles";
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import ListLesson from "./ListLesson/list-lesson";
import {courses} from "../../globals/mockData";
import {ThemeContext} from "../../provider/theme-provider";

const CourseDetail = ({route}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    })

    const item = route.params.item;
    return (
        <View style={styles.container}>
            <VideoPlayer/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DescriptionLesson item={item}/>
                <ListLesson/>
            </ScrollView>

        </View>
    );
};



export default CourseDetail;
