import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {myLightWhite, skillBtnColor} from "../../../../../globals/styles";

const SkillItem = ({title, onPress}) => {
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
        backgroundColor: skillBtnColor,
        borderRadius: 40,
        height: 30,
        justifyContent: 'center',
        margin: 3
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: myLightWhite,
        textAlign: 'center',
        padding: 12
    }
})

export default SkillItem;
