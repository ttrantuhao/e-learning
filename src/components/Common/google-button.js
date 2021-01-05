import React from 'react';
import {StyleSheet} from 'react-native';
import {myWhite} from "../../globals/styles";
import {SocialIcon} from "react-native-elements";

const GoogleButton = ({onPress}) => {
    const styles = StyleSheet.create({
        button: {
            height: 45,
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
