import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import {cardColor, myDarkBlue, myGrayBlue, myLightWhite, mySilver, myWhite} from "../../../../../globals/styles";

const CourseItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../../../assets/ic_course.png')} style={styles.image}/>
            <View style={{margin: 5}}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.content}>{props.item.author}</Text>
                <Text style={styles.content}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </View>
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
