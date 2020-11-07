import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myGray, themeColor} from "../../../globals/styles";
import {styles} from './styles'

const Register = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={themeColor} size={70}/>
            <Text style={styles.title}>Register</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='user' type={'simple-line-icon'} color={myGray} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor={myGray}
                placeholder='email'
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color={myGray} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor={myGray}
                placeholder='password'
                secureTextEntry
                errorMessage={
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color={myGray} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor={myGray}
                placeholder='confirm password'
                secureTextEntry
                errorMessage={
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
            />
            <PrimaryButton title='Register' onPress={() => {
            }}/>
            <TouchableOpacity>
                <Text style={styles.loginText}>
                    Already have an account? Login here!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

