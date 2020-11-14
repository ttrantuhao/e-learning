import React from 'react';
import {Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mySilver, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";

const ListCourseItem = ({item, navigation}) => {
    const handlePress = (item) => {
        navigation.navigate('CourseDetail', {item});
    }
    return (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image
                source={require('../../../../assets/ic_course.png')}
                style={styles.image}
            />
            <View style={styles.courseInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.author}</Text>
                <Text
                    style={styles.content}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
            </View>
            <Icon name='more-vertical' type='feather' style={styles.icon} color={mySilver}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 10,
        minHeight: 60,
        // justifyContent: 'space-between'
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 100
    },
    courseInfo: {
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
    icon: {
    }
})

export default ListCourseItem;
// onPress={() => {
//     Alert.alert('Info', 'course list item is press',
//         [
//             {
//                 text: 'Cancel',
//                 onPress: () => {
//                     console.log('press cancel')
//                 }
//             },
//             {
//                 text: 'OK',
//                 onPress: () => {
//                     Share.share({
//                         message: 'React native with hook'
//                     })
//                 }
//             }
//         ])
// }}
