import React, {useContext} from 'react';
import {Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mySilver, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const ListCourseItem = ({item, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        item: {
            flexDirection: 'row',
            margin: 10,
            minHeight: 60,
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
            color: theme.colors.text,
            fontSize: 16
        },
        content: {
            color: theme.colors.subtext,
            fontSize: 12
        },
        icon: {
        }
    })

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
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
            <Icon name='more-vertical' type='feather' style={styles.icon} color={theme.colors.text}/>
        </TouchableOpacity>
    );
};



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
