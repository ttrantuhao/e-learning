import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {myLightWhite, myWhite, skillBtnColor} from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";


const SmallButton = ({title, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        button: {
            backgroundColor: theme.colors.smallBtn,
            borderRadius: 40,
            height: 30,
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



export default SmallButton;
