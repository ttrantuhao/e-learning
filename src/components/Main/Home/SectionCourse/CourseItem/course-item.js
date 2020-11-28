import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {cardColor, mySilver, myWhite} from "../../../../../globals/styles";
import {ThemeContext} from "../../../../../provider/theme-provider";

const CourseItem = ({item, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        container: {
            margin: 5,
            width: 200,
            height: 180,
            backgroundColor: theme.colors.card,
            elevation: 2
        },
        image: {
            height: 90,
            width: 200,
        },
        title: {
            fontSize: 15,
            color: theme.colors.text,
        },
        content: {
            fontSize: 13,
            color: theme.colors.subtext
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('../../../../../../assets/ic_course.png')} style={styles.image}/>
            <View style={{margin: 5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.author}</Text>
                <Text style={styles.content}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    );
};



export default CourseItem;
