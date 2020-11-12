import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListCourseItem from "../ListCourseItem/list-course-item";
import {courses} from '../../../globals/mockData'
import {mySilver} from "../../../globals/styles";

const ListCourse = ({navigation, header}) => {
    // const header = (resultNumber) => {
    //     return (
    //         <Text style={styles.header}>
    //             {`${resultNumber} Results`}
    //         </Text>
    //     );
    // }
    const renderSeparator = () => (<View style={styles.separator}/>);
    return (
            <FlatList
                style={styles.container}
                data={courses}
                renderItem={({item, index}) => <ListCourseItem item={item} key={index} navigation={navigation}/>}
                ListHeaderComponent={() => header()}
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
