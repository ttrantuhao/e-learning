import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {mySilver, myWhite} from "../../../../../globals/styles";
import {ThemeContext} from "../../../../../provider/theme-provider";

const ListAuthorItem = ({item}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: 10,
            minHeight: 70,
            // justifyContent: 'space-between'
            alignItems: 'center'
        },
        authorInfo: {
            marginLeft: 20,
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
            <Avatar
                rounded
                source={{uri:item.avatar}}
                size='medium'
            />
            <View style={styles.authorInfo}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.content}>{`${item.numcourses} courses`}</Text>
            </View>
        </TouchableOpacity>
    );
};



export default ListAuthorItem;
