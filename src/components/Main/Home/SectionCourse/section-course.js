import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from "react-native";
import CourseItem from "./CourseItem/course-item";
import ListHeader from "../../../Common/list-header";
import {screenKey} from "../../../../globals/constants";

const SectionCourse = ({title, navigation, style, courses, onPressSeeAll}) => {
    const onPressCourseItem = (item) => {
        navigation.push(screenKey.CourseDetailScreen, {item});
    }

    return (
        <View style={{...styles.container, ...style}}>
            <ListHeader title={title} rightTitle='See all' onPress={onPressSeeAll}/>
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
