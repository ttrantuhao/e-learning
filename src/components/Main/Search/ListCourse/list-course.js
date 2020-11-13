import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {courses} from "../../../../globals/mockData";
import {mySilver} from "../../../../globals/styles";
import ListCourseItem from "../../../Course/ListCourseItem/list-course-item";

const ListCourse = ({navigation}) => {
    const renderSeparator = () => (<View style={styles.separator}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                100 Results
            </Text>
            <FlatList
                data={courses}
                renderItem={({item, index}) => (<ListCourseItem navigation={navigation} item={item} key={index}/>)}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={((item, index) => index.toString())}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        fontSize: 13,
        margin: 10
    },
    container: {
        marginBottom: 10,
        marginTop: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        margin: 5
    }
})

export default ListCourse;
