import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const ListLessonItem = ({item, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles= StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 45
        },
        title: {
            color: theme.colors.text,
            fontSize: 14,
            marginLeft: 10
        },
        time: {
            color: theme.colors.subtext,
            fontSize: 12
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item.videoUrl)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='check-circle' color='green' size={13}/>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <Text style={styles.time}>{item.hours}</Text>
        </TouchableOpacity>

    );
};



export default ListLessonItem;
