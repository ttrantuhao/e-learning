import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {mySilver, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";

const ListLessonItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='check-circle' color='green' size={13}/>
                <Text style={styles.title}>{item}</Text>
            </View>
            <Text style={styles.time}>2:04</Text>
        </TouchableOpacity>

    );
};

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45
    },
    title: {
        color: myWhite,
        fontSize: 14,
        marginLeft: 10
    },
    time: {
        color: mySilver,
        fontSize: 12
    }
})

export default ListLessonItem;
