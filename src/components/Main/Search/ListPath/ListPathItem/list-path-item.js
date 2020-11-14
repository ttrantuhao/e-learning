import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mySilver, myWhite} from "../../../../../globals/styles";

const ListPathItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={require('../../../../../../assets/ic_course.png')}
                style={styles.image}
            />
            <View style={styles.pathInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.numberOfCourse} courses</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        minHeight: 60,
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 100
    },
    pathInfo: {
        marginLeft: 10,
        flex: 1
    },
    title: {
        color: myWhite,
        fontSize: 16
    },
    content: {
        color: mySilver,
        fontSize: 12
    },
})

export default ListPathItem;
