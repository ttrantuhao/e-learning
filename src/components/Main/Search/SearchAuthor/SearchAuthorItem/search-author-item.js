import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {mySilver, myWhite} from "../../../../../globals/styles";

const SearchAuthorItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Avatar
                rounded
                source={{uri:'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='medium'
            />
            <View style={styles.authorInfo}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.content}>10 courses</Text>
            </View>
        </TouchableOpacity>
    );
};

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
        color: myWhite,
        fontSize: 16
    },
    content: {
        color: mySilver,
        fontSize: 12
    },
})

export default SearchAuthorItem;
