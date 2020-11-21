import React, {useContext} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {bgColor, myBlue, mySilver, myWhite} from "../../../../globals/styles";
import {ThemeContext} from "../../../../provider/theme-provider";

const SettingSwitchItem = ({title, content, value, onChange}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
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
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
            <View style={{marginBottom: 10, marginTop: 10, flex: 9}}>
                <Text style={styles.text}>{title}</Text>
                {
                    content ? <Text style={styles.subText}>{content}</Text> : <></>
                }
            </View>
            <Switch style={{flex: 1}}
                    trackColor={{false: mySilver, true: '#47BAEC'}}
                    thumbColor={value ? myBlue : '#767577'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onChange}
                    value={value}
            />
        </View>
    )
}

export default SettingSwitchItem;


