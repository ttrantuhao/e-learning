import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {cardColor, mySilver, myWhite} from "../../globals/styles";
// import Menu, {MenuItem} from 'react-native-material-menu';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import { useNavigation } from '@react-navigation/native';

const RightHeader = ({navigation}) => {

    return (
        <View style={styles.rightHeader}>
            <Avatar
                rounded
                source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='small'
                onPress={() => (navigation.navigate('Profile'))}
            />
            <Menu>
                <MenuTrigger>
                    <Icon name='more-vertical' type='feather' color={mySilver}
                          iconStyle={{marginLeft: 15, marginRight: 10}}/>
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsWrapper: {
                        backgroundColor: cardColor,
                    },
                    optionText: {
                        color: myWhite,
                        fontSize: 16,
                        margin: 15
                    }
                }}>
                    <MenuOption onSelect={() => {navigation.navigate('Setting')}} text='Setting'/>
                    <MenuOption onSelect={() => {}} text='Logout'/>
                </MenuOptions>
            </Menu>
        </View>

    );
};

const styles = StyleSheet.create({
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})
export default RightHeader;



// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {Avatar, Icon} from "react-native-elements";
// import {cardColor, mySilver, myWhite} from "../../globals/styles";
// import {HeaderButton, HeaderButtons, HiddenItem, OverflowMenu,} from 'react-navigation-header-buttons';
//
// const RightHeader = () => {
//     return (
//         <View style={styles.rightHeader}>
//             <Avatar
//                 rounded
//                 source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
//                 size='small'
//             />
//             <OverflowMenu
//                 style={{marginLeft: 15}}
//                 OverflowIcon={<Icon name='more-vertical' type='feather' color={mySilver}/>}
//             >
//                 <>
//                 <HiddenItem
//                     title="Profile"
//                     titleStyle={styles.menuItem}
//                     style={styles.menuItemContainer}
//                     onPress={() => {
//                     }}/>
//                 <HiddenItem
//                     title="Setting"
//                     titleStyle={styles.menuItem}
//                     style={styles.menuItemContainer}
//                     onPress={() => {
//                     }}/>
//                     </>
//             </OverflowMenu>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     rightHeader: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     menuItem: {
//         color: myWhite,
//         fontSize: 16
//     },
//     menuItemContainer: {
//         backgroundColor: cardColor,
//         marginTop: 0,
//         marginBottom: 0,
//         paddingTop: 0,
//         paddingBottom: 0
//     }
// })
//
// export default RightHeader;


// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {Avatar, Icon} from "react-native-elements";
// import {cardColor, mySilver, myWhite} from "../../globals/styles";
// import Menu, {MenuItem} from 'react-native-material-menu';
//
// const RightHeader = () => {
//     let _menu = null;
//
//     const setMenuRef = ref => {
//         _menu = ref;
//     };
//
//     const hideMenu = () => {
//         _menu.hide();
//     };
//
//     const showMenu = () => {
//         _menu.show();
//     };
//
//     return (
//         <View style={styles.rightHeader}>
//             <Avatar
//                 rounded
//                 source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
//                 size='small'
//             />
//             <Menu
//                 style={{backgroundColor: cardColor}}
//                 ref={setMenuRef}
//                 button={<Icon name='more-vertical' type='feather' color={mySilver}
//                               iconStyle={{marginLeft: 15}} onPress={showMenu}/>}
//             >
//                 <MenuItem onPress={hideMenu} textStyle={styles.menuItem}>Setting</MenuItem>
//                 <MenuItem onPress={hideMenu} textStyle={styles.menuItem}>Logout</MenuItem>
//             </Menu>
//         </View>
//
//     )
//         ;
// };
//
// const styles = StyleSheet.create({
//     rightHeader: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     menuItem: {
//         color: myWhite,
//         fontSize: 16
//     }
// })
// export default RightHeader;

