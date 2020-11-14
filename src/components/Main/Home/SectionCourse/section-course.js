import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from "react-native";
import CourseItem from "./CourseItem/course-item";
import {courses} from "../../../../globals/mockData";
import ListHeader from "../../../Common/list-header";

const SectionCourse = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <ListHeader title={title} rightTitle='See all'/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({item, index}) => (<CourseItem item={item} key={index} navigation={navigation}/>)}
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
