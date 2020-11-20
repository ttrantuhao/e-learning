import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListCourse from "../../../Course/ListCourse/list-course";
import ListPath from "../ListPath/list-path";
import ListAuthor from "../ListAuthor/list-author";
import ListHeader from "../../../Common/list-header";
import {bgColor} from "../../../../globals/styles";
import {courses, paths, topAuthor} from "../../../../globals/mockData";
import ListCourseItem from "../../../Course/ListCourseItem/list-course-item";
import ListPathItem from "../ListPath/ListPathItem/list-path-item";
import ListAuthorItem from "../ListAuthor/ListAuthorItem/list-author-item";
import {screenKey} from "../../../../globals/constants";


const ListAll = ({navigation}) => {
    const course = courses.slice(0, 4);
    const author = topAuthor.slice(0, 4);
    const path = paths.slice(0, 4);
    const onPressListCourseItem = (item) => {
        navigation.navigate(screenKey.CourseDetailScreen, {item})
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ListHeader title='Courses' rightTitle='100 Results'/>
            {course.map((item, index) => (
                <ListCourseItem navigation={navigation}
                                item={item}
                                key={index}
                                onPress={() => onPressListCourseItem(item)}
                />
            ))}

            <ListHeader title='Paths' rightTitle='100 Results'/>
            {path.map((item, index) => (<ListPathItem navigation={navigation} item={item} key={index}/>))}

            <ListHeader title='Authors' rightTitle='100 Results'/>
            {author.map((item, index) => (<ListAuthorItem navigation={navigation} item={item} key={index}/>))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
        flex: 1,
        padding: 10,
    },

})

export default ListAll;
