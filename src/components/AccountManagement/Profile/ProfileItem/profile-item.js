import React, {useContext, useState} from 'react';
import {Text, View, Modal, StyleSheet, Alert, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from "react-native-elements";
import {ThemeContext} from "../../../../provider/theme-provider";

const ProfileItem = ({title, subtitle, value, iconName, iconType, editable, onChange}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
                paddingRight: 10,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.border
            }}>
                <Icon name={iconName} type={iconType} color={theme.colors.text} size={18}
                      style={{marginRight: 20, marginLeft: 10}}/>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <Text style={{color: theme.colors.text, fontSize: 15, fontWeight: 'bold'}}>{title}</Text>
                        <Text style={{
                            color: 'red',
                            fontSize: 10,
                            fontWeight: 'bold',
                            marginHorizontal: 5
                        }}>{subtitle}</Text>
                    </View>
                    <TextInput editable={editable}
                               style={{color: theme.colors.text, fontSize: 14}}
                               value={value}
                               onChangeText={onChange}
                    />
                </View>
                {editable &&
                    <Icon name={'edit'} type='material' color={theme.colors.text} size={18}/>}

            </View>

        </>
    );
};

export default ProfileItem;
