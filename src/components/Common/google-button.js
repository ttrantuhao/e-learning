import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {myBlue, myWhite} from "../../globals/styles";
import ImageButton from "./image-button";
import {SocialIcon} from "react-native-elements";

const GoogleButton = ({onPress}) => {
    const styles = StyleSheet.create({
        button: {
            // backgroundColor: myBlue,
            // borderRadius: 40,
            height: 45,
            // justifyContent: 'center',
            // margin: 10,
            // marginBottom: 20
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: myWhite,
            textAlign: 'center',
            padding: 10
        }
    })

    return (
        <SocialIcon
            title='Sign In With Facebook'
            button
            type='google'
            style={styles.button}
            onPress={onPress}
        />
    );
};


export default GoogleButton;
