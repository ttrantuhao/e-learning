import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from "react-native";
import CourseItem from "./CourseItem/course-item";
import {courses} from "../../../../globals/mockData";
import ListHeader from "../../../Common/list-header";
import {screenKey} from "../../../../globals/constants";

const SectionCourse = ({title, navigation}) => {
    const onPressCourseItem = (item) => {
        navigation.navigate(screenKey.CourseDetailScreen, {item});
    }
    return (
        <View style={styles.container}>
            <ListHeader title={title} rightTitle='See all'/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({item, index}) => (
                    <CourseItem item={item} key={index} navigation={navigation} onPress={() => onPressCourseItem(item)}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    }
})

export default SectionCourse;
