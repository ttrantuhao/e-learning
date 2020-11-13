import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {bgColor, myWhite} from "../../globals/styles";
import VideoPlayer from "./VideoPlayer/video-player";
import DescriptionLesson from "./DescriptionLesson/description-lesson";
import ListLesson from "./ListLesson/list-lesson";

// const CourseDetail = ({navigation, route}) => {
//     console.log(route.params.item);
//     const item = route.params.item;
const CourseDetail = ({route}) => {
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
        flex: 1,
        marginTop: 20
    },
    text: {
        color: myWhite
    }
})

export default CourseDetail;
