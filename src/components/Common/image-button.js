import React from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet, Text} from 'react-native';
import {myWhite} from "../../globals/styles";

const ImageButton = ({title, onPress, height, width, fontSize}) => {
    const styles = StyleSheet.create ({
        button: {
            margin: 5,
            height: height? height : 110,
            width: width? width : 'auto'
        },
        touch: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: fontSize? fontSize : 24,
            fontWeight: 'bold',
            color: myWhite,
            textAlign: 'center'
        }
    })

    return (
        <ImageBackground
            style={styles.button}
            source={{uri: 'https://www.designyourway.net/blog/wp-content/uploads/2020/04/bg17.jpg'}}
        >
            <TouchableOpacity
                style={styles.touch}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};


export default ImageButton;
