import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {bgColor, myWhite} from "../../../globals/styles";
import {Avatar} from "react-native-elements";

const Profile = () => {
    const renderInterestItem = (title) => {

    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.usernameContainer}>
                <Avatar
                    rounded
                    source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                    size='large'
                />
                <Text style={styles.textUsername}>Tran Tu Hao</Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        padding: 20,
        backgroundColor: bgColor,
        flex: 1
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textUsername: {
        color: myWhite,
        fontSize: 25,
        // fontWeight: 'bold',
        marginLeft: 20
    },

})

export default Profile;
