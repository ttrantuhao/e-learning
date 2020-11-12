import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {mySilver} from "../../globals/styles";

const RightHeader = () => {
    return (
        <View style={styles.rightHeader}>
            <Avatar
                rounded
                source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='small'
            />
            <Icon name='more-vertical' type='feather' color={mySilver}
                  iconStyle={{marginLeft: 15}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    rightHeader:  {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default RightHeader;
