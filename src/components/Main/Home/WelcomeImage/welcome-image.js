import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {myLightWhite, myWhite} from "../../../../globals/styles";
import {welcomeTitle, welcomeContent} from "../../../../globals/mockData";

const WelcomeImage = () => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../../../../../assets/bg_welcome.jpg')}
        >
            <Text style={styles.title}>
                {welcomeTitle}
            </Text>
            <Text style={styles.text}>
                {welcomeContent}
            </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        margin: 5,
        padding: 5,
        height: 200,
        // opacity: 0.8,
        width: 'auto',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: myWhite,
        textAlign: 'left',
        marginBottom: 10
    },
    text: {
        fontSize: 13,
        color: myLightWhite,
        textAlign: 'left',
        marginRight: 70
    }
})
export default WelcomeImage;
