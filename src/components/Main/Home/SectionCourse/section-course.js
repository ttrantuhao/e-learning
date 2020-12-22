import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
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
                renderItem={({item}) => (
                    <CourseItem item={item} navigation={navigation} onPress={() => onPressCourseItem(item)}/>
                )}
                keyExtractor={((item,index) => index.toString())}
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
