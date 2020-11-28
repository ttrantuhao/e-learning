import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from "react-native-elements";
import {myWhite} from "../../../../../globals/styles";
import {ThemeContext} from "../../../../../provider/theme-provider";

const AuthorItem = ({item}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            width: 100,
            flexDirection: 'column',
            alignItems: 'center'
        },
        text: {
            fontSize: 13,
            textAlign: 'center',
            color: theme.colors.text,
        }
    })
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                source={{uri:'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='large'
            />
            <Text style={styles.text}>{item}</Text>
        </View>
    );
};


export default AuthorItem;
