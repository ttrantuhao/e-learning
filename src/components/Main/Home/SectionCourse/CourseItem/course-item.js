import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {cardColor, mySilver, myWhite} from "../../../../../globals/styles";

const CourseItem = ({item, navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.push('CourseDetail', {item})}>
            <Image source={require('../../../../../../assets/ic_course.png')} style={styles.image}/>
            <View style={{margin: 5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.author}</Text>
                <Text style={styles.content}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    container: {
        margin: 5,
        width: 200,
        height: 180,
        backgroundColor: cardColor,
        elevation: 1
    },
    image: {
        height: 90,
        width: 200,
    },
    title: {
        fontSize: 15,
        color: myWhite,
    },
    content: {
        fontSize: 13,
        color: mySilver
    }
})

export default CourseItem;
