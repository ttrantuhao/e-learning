import React from 'react';
import {View, StyleSheet, Text, Switch, ScrollView} from 'react-native';
import {bgColor, myBlue, myLightWhite, mySilver, myWhite} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";

const Setting = () => {
    const renderSettingItem = (title, content) => {
        return (
            <View style={{marginBottom: 10, marginTop: 10}}>
                <Text style={styles.text}>{title}</Text>
                {
                    content !== '' ? <Text style={styles.subText}>{content}</Text> : <></>
                }
            </View>
        )
    }
    const renderSwitchItem = (title, content, isOn) => {

        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
                <View style={{marginBottom: 10, marginTop: 10, flex: 9}}>
                    <Text style={styles.text}>{title}</Text>
                    {
                        content !== '' ? <Text style={styles.subText}>{content}</Text> : <></>
                    }
                </View>
                <Switch style={{flex: 1}}
                    trackColor={{ false: mySilver, true: '#47BAEC' }}
                    thumbColor={isOn ? myBlue : '#767577'}
                    ios_backgroundColor="#3e3e3e"
                    // onValueChange={toggleSwitch}
                    value={isOn}
                />
            </View>
        )
    }

    const renderLine = () => (
        <View
            style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                marginTop: 10,
                marginBottom: 10
            }}
        />
    )

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.usernameContainer}>
                    <Icon name='settings' type='material' color={mySilver} size={60}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.username}>
                            Tran Tu Hao
                        </Text>
                        <Text style={styles.email}>
                            1712421@student.hcmus.edu.vn
                        </Text>
                    </View>
                </View>
                {renderSettingItem('Account', '')}
                {renderSettingItem('Subscription','(Expires: Nov 13, 2020)')}
                {renderSettingItem('Communication Preferences', '')}
                {renderLine()}
                {renderSettingItem('Default caption language', 'English')}
                {renderSwitchItem('Required Wifi for streaming', '', true)}
                {renderSwitchItem('Required Wifi for downloading', '', true)}
                {renderSwitchItem('Show quiz at the end of video', '', true)}
                {renderSettingItem('Download location','Default location (2.3 GB free of 21.77 GB)')}
                {renderSwitchItem('Recommended content push notification',
                    'Receive notifications about recommended contents', true)}
                {renderSwitchItem('Reminder to learn notifications', '', false)}
                {renderSettingItem('Caption','')}
                {renderSettingItem('Notifications','')}
                {renderSettingItem('Advance options','')}
                {renderLine()}
                {renderSettingItem('App version','2.39.0')}
                <PrimaryButton title='Logout'/>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
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
        color: myWhite,
        fontSize: 16
    },
    email: {
        color: mySilver,
        fontSize: 13
    },
    text: {
        color: myWhite,
        fontSize: 17,
    },
    subText: {
        color: mySilver,
        fontSize: 13
    }
})

export default Setting;
