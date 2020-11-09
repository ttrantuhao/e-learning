import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text} from "react-native";
import {myDarkBlue, myGray, myGrayBlue, myLightBlue, myMediumBlue, myWhite} from "../../../../../globals/styles";

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
        backgroundColor: myGrayBlue,
        borderRadius: 40,
        height: 25,
        justifyContent: 'center',
        margin: 3
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: myWhite,
        textAlign: 'center',
        padding: 12
    }
})

export default SkillItem;
