import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {bgColor, cardColor, mySilver, myWhite} from "../../globals/styles";
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

const RightHeader = () => {
    let _menu = null;

    const setMenuRef = ref => {
        _menu = ref;
    };

    const hideMenu = () => {
        _menu.hide();
    };

    const showMenu = () => {
        _menu.show();
    };

    return (
        <View style={styles.rightHeader}>
            <Avatar
                rounded
                source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='small'
            />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Menu
                    style={{backgroundColor: cardColor}}
                    ref={setMenuRef}
                    button={<Icon name='more-vertical' type='feather' color={mySilver}
                                  iconStyle={{marginLeft: 15}} onPress={showMenu}/>}
                >
                    <MenuItem onPress={hideMenu} textStyle={styles.menuItem}>Setting</MenuItem>
                    <MenuItem onPress={hideMenu} textStyle={styles.menuItem}>Logout</MenuItem>
                </Menu>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuItem: {
        color: myWhite,
        fontSize: 16
    }
})

export default RightHeader;
