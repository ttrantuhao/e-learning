import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ListHeader from "../../../Common/list-header";
import {courses, paths, topAuthor} from "../../../../globals/mockData";
import ListCourseItem from "../../../Course/ListCourseItem/list-course-item";
import ListAuthorItem from "../ListAuthor/ListAuthorItem/list-author-item";
import {screenKey} from "../../../../globals/constants";


const ListAll = ({navigation}) => {
    const course = courses.slice(0, 4);
    const author = topAuthor.slice(0, 4);
    const onPressListCourseItem = (item) => {
        navigation.navigate(screenKey.CourseDetailScreen, {item})
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ListHeader title='Courses' rightTitle='10 Results'
                        onPress={() => navigation.navigate(screenKey.ListCourseStack, {}, {routeName: screenKey.ListCourse})}
            />
            {course.map((item, index) => (
                <ListCourseItem navigation={navigation}
                                item={item}
                                key={index}
                                onPress={() => onPressListCourseItem(item)}
                />
            ))}

            {/*<ListHeader title='Paths' rightTitle='100 Results'/>*/}
            {/*{path.map((item, index) => (<ListPathItem navigation={navigation} item={item} key={index}/>))}*/}

            <ListHeader
                title='Authors' rightTitle='10 Results'
                onPress={() => navigation.navigate(screenKey.ListAuthorScreen)}
            />
            {author.map((item, index) => (<ListAuthorItem navigation={navigation} item={item} key={index}/>))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default ListAll;
