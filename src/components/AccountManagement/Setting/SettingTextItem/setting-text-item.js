import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {bgColor, mySilver, myWhite} from "../../../../globals/styles";
import {ThemeContext} from "../../../../provider/theme-provider";

const SettingTextItem = ({title, content}) => {
    const {theme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            marginBottom: 10,
            marginTop: 10
        },
        text: {
            color: theme.colors.text,
            fontSize: 17,
        },
        subText: {
            color: theme.colors.subtext,
            fontSize: 13
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {
                content ? <Text style={styles.subText}>{content}</Text> : <></>
            }
        </View>
    );
};

export default SettingTextItem;


