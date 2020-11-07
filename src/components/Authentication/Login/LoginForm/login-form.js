import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Icon, Input} from "react-native-elements";
import {themeColor} from "../../../../globals/styles";

const LoginForm = () => {
    const [passwordValid, setPasswordValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    return (
        <View>
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='user' type={'simple-line-icon'} color="#7384B4" size={18} />
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor="#7384B4"
                placeholder='email'
            />

            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color="#7384B4" size={18} />
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor="#7384B4"
                placeholder='password'
                secureTextEntry
                errorMessage={
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
            />


        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: themeColor,
        height: 45,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: themeColor,
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        color: '#F44336',
    },
});
