import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {bgColor, mySilver, MyTheme, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {ThemeContext} from "../../../provider/theme-provider";
import SettingSwitchItem from "./SettingSwitchItem/setting-switch-item";
import SettingTextItem from "./SettingTextItem/setting-text-item";

const Setting = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 15,
            paddingTop: 50
        },
        usernameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
        },
        username: {
            color: theme.colors.text,
            fontSize: 16
        },
        email: {
            color: theme.colors.subtext,
            fontSize: 13
        },
        line: {
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginTop: 10,
            marginBottom: 10
        }
    })

    const onSwitchTheme = () => {
        // setDarkThemeOn(!darkThemeOn);
        setTheme(theme.dark ? MyTheme.light : MyTheme.dark);
    }

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.usernameContainer}>
                    <Icon name='settings' type='material' color={theme.colors.text} size={60}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.username}>
                            Tran Tu Hao
                        </Text>
                        <Text style={styles.email}>
                            1712421@student.hcmus.edu.vn
                        </Text>
                    </View>
                </View>
                <SettingTextItem title='Account'/>
                <SettingTextItem title='Subscription' content='(Expires: Nov 13, 2020)'/>
                <SettingTextItem title='Communication Preference'/>
                <View style={styles.line}/>
                <SettingTextItem title='Default caption language' content='English'/>
                <SettingSwitchItem title='Dark Theme' value={theme.dark} onChange={onSwitchTheme}/>
                <SettingSwitchItem title='Required Wifi for streaming' value={true}/>
                <SettingSwitchItem title='Required Wifi for downloading' value={true}/>
                <SettingSwitchItem title='Show quiz at the end of video' value={true}/>
                <SettingSwitchItem title='Download location' content='Default location (2.3 GB free of 21.77 GB)' value={true}/>
                <SettingSwitchItem title='Recommended content push notification' content='Receive notifications about recommended contents' value={true}/>
                <SettingSwitchItem title='Reminder to learn notifications' value={false}/>
                <SettingSwitchItem title='Theme' value={true}/>
                <SettingTextItem title='Caption'/>
                <SettingTextItem title='Notifications'/>
                <SettingTextItem title='Advance option'/>
                <View style={styles.line}/>
                <SettingTextItem title='App version' content='2.39.0'/>
                <PrimaryButton title='Logout'/>
            </ScrollView>
        </View>

    );
};



export default Setting;
