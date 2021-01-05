import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import {screenKey} from "../../globals/constants";
import {ThemeContext} from "../../provider/theme-provider";
import {AuthenticationContext} from "../../provider/authentication-provider";

const RightHeader = ({navigation}) => {
    const {theme} = useContext(ThemeContext);
    const authContext = useContext(AuthenticationContext);
    const styles = StyleSheet.create({
        rightHeader: {
            flexDirection: 'row',
            alignItems: 'center'
        },
    })
    return (
        <View style={styles.rightHeader}>
            <Avatar
                rounded
                source={{uri: authContext.state.userInfo.avatar}}
                size='small'
                onPress={() => (navigation.navigate(screenKey.ProfileScreen))}
            />
            <Menu>
                <MenuTrigger>
                    <Icon name='more-vertical' type='feather' color={theme.colors.text}
                          iconStyle={{marginLeft: 15, marginRight: 10}}/>
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsWrapper: {
                        backgroundColor: theme.colors.card,
                    },
                    optionText: {
                        color: theme.colors.text,
                        fontSize: 16,
                        margin: 15
                    }
                }}>
                    <MenuOption onSelect={() => {navigation.navigate(screenKey.SettingScreen)}} text='Setting'/>
                    <MenuOption onSelect={() => {authContext.logout()}} text='Logout'/>
                </MenuOptions>
            </Menu>
        </View>

    );
};


export default RightHeader;
