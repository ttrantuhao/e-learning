import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {myMediumBlue} from "../../globals/styles";

const SecondaryButton = ({title, onPress}) => {
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
        borderRadius: 40,
        borderWidth: 1,
        borderColor: myMediumBlue,
        height: 45,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myMediumBlue,
        textAlign: 'center',
    }
})
export default SecondaryButton;
