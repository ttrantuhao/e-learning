import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {themeColor} from "../../globals/styles";

const TouchableText = ({text}) => {
    return (
        <Text style={styles.text}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: themeColor,
        fontSize: 16,
        textAlign: 'center'
    }
})

export default TouchableText;
