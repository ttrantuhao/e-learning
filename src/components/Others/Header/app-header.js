import React from 'react';
import {Header} from "react-native-elements";
import {StyleSheet, Text} from "react-native";
import {myWhite} from "../../../globals/styles";

const AppHeader = ({title}) => {
    return (
        <Header
            // leftComponent={{ text: title, style: {styles.title} }}
            // centerComponent={}
            rightComponent={{ icon: 'more-vertical', type: 'feather', color: '#fff' }}
        >
        <Text style={styles.title}>Browse</Text>
        </Header>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: myWhite
    }
})

export default AppHeader;
