import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {mySilver, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const ListLessonItem = ({item}) => {
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
        <TouchableOpacity style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='check-circle' color='green' size={13}/>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <Text style={styles.time}>{item.hours}</Text>
        </TouchableOpacity>

    );
};



export default ListLessonItem;
