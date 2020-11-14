import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {myBlue, myLightWhite, myMediumBlue} from "../../globals/styles";

const PrimaryButton = ({title, onPress}) => {
    return (
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    button: {
        backgroundColor: myBlue,
        borderRadius: 40,
        height: 45,
        justifyContent: 'center',
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myLightWhite,
        textAlign: 'center',
        padding: 10
    }
})
export default PrimaryButton;
