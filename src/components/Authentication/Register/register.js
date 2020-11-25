import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import {registerAccount} from "../../../core/services/authentication-service";

const Register = ({navigation}) => {
    //handle login
    const [status, setStatus] = useState(null);

    //handle input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //handle valid input
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [matchPassword, setMatchPassword] = useState(true);

    const validateInput = (email, password, confirmPassword) => {
        if (email === '')
            setEmailValid(false);
        if (password === '')
            setPasswordValid(false);
        if (confirmPassword === '')
            setConfirmPasswordValid(false);
        if (confirmPassword !== password)
            setMatchPassword(false);
        return (email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword);
    }

    const getErrorConfirmPass = () => {
        if (confirmPasswordValid) {
            if (matchPassword)
                return null;
            return 'Confirm password does not match password';
        }
        return 'Please enter confirm password ';
    }
    const renderStatus = (status) => {
        if(status) {
            if(status.status === 409)
                return <Text style={{...styles.errorInputStyle, textAlign: 'center'}}>{status.errorString}</Text>
        }
    }
    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={myBlue} size={70}/>
            <Text style={styles.title}>Register</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='user' type={'simple-line-icon'} color={myBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter email address'
                }
                placeholderTextColor={myBlue}
                placeholder='email'
                onChangeText={text => {
                    setEmail(text);
                    setEmailValid(true);
                }}
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color={myBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor={myBlue}
                placeholder='password'
                secureTextEntry
                errorMessage={
                    passwordValid ? null : 'Please enter password'
                }
                onChangeText={text => {
                    setPassword(text);
                    setPasswordValid(true);
                }}
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color={myBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor={myBlue}
                placeholder='confirm password'
                secureTextEntry
                errorMessage={getErrorConfirmPass()}
                onChangeText={text => {
                    setConfirmPassword(text);
                    setMatchPassword(true);
                    setConfirmPasswordValid(true);
                }}
            />
            {renderStatus(status)}
            <PrimaryButton
                title='Register'
                onPress={() => {
                    if (validateInput(email, password, confirmPassword)) {
                        setStatus(registerAccount(email, password));
                        if(status && status.status === 200) {
                            navigation.navigate(screenKey.VerifyEmailScreen, {email});
                        }
                    }
                }}
            />
            <TouchableOpacity onPress={() => (navigation.navigate(screenKey.LoginScreen))}>
                <Text style={styles.loginText}>
                    Already have an account? Login here!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

