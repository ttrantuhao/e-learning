import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {myBlue, myLightWhite, myWhite} from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";

const PrimaryButton = ({title, onPress, style}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        button: {
            backgroundColor:theme.colors.primary,
            borderRadius: 40,
            height: 45,
            justifyContent: 'center',
            margin: 10,
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
            <TouchableOpacity
                style={{...styles.button, ...style}}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
    );
};


export default PrimaryButton;
