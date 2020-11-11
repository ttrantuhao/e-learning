import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import {courses} from '../../../globals/mockData'
import {myBlue, mySilver} from "../../../globals/styles";

const ListCourses = ({navigation}) => {
    const handleClick = () => {

    }

    const header = (resultNumber) => {
        return (
            <Text style={styles.header}>
                {`${resultNumber} Results`}
            </Text>
        );
    }
    const renderSeparator = () => (<View style={styles.separator}/>);
    return (
            <FlatList
                data={courses}
                renderItem={({item}) => <ListCoursesItem item={item} navigation={navigation}/>}
                ListHeaderComponent={() => header(courses.length)}
                ItemSeparatorComponent={renderSeparator}
            />
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        padding: 10,
        fontSize: 13,
        marginBottom: 5
    },
    container: {

    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        margin: 5
    }
})

export default ListCourses;
