import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";
import {myDarkBlue, mySilver, myWhite} from "../../globals/styles";

const ListHeader = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.seeAll}>
                <Text style={styles.seeAllText}>See all</Text>
                <Icon name={'chevron-small-right'} type={'entypo'} color={myDarkBlue} size={20}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        color: myWhite,
        margin: 5,
    },
    seeAll: {
        flexDirection: "row",
        alignItems: "center"
    },
    seeAllText: {
        color: mySilver,
        fontSize: 13
    }
})

export default ListHeader;
