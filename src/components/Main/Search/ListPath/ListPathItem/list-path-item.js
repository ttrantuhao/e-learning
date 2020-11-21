import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mySilver, myWhite} from "../../../../../globals/styles";
import {ThemeContext} from "../../../../../provider/theme-provider";

const ListPathItem = ({item}) => {
    const {theme} = useContext(ThemeContext);
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
            color: theme.colors.text,
            fontSize: 16
        },
        content: {
            color: theme.colors.subtext,
            fontSize: 12
        },
    })
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



export default ListPathItem;
