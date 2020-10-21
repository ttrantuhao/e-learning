import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet, Text} from 'react-native';

const ImageButton = (props) => {
    return (
        <ImageBackground style={styles.button} source={{uri: 'https://www.designyourway.net/blog/wp-content/uploads/2020/04/bg17.jpg'}}>
            <TouchableOpacity
                style={styles.touch}
                onPress={props.onPress}
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create ({
    button: {
        height:  100,
        margin: 5,
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
        textAlign: 'center'
    }
})
export default ImageButton;