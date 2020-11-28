import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
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
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //handle valid input
    const [usernameValid, setUsernameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [matchPassword, setMatchPassword] = useState(true);

    useEffect(() => {
        if(status && status.status === 200) {
            navigation.navigate(screenKey.VerifyEmailScreen, {email});
        }
    }, [status])

    const validateInput = (username, email, phoneNumber, password, confirmPassword) => {
        if (username === '')
            setUsernameValid(false);
        if (email === '')
            setEmailValid(false);
        if (phoneNumber === '')
            setPhoneNumberValid(false);
        if (password === '')
            setPasswordValid(false);
        if (confirmPassword === '')
            setConfirmPasswordValid(false);
        if (confirmPassword !== password)
            setMatchPassword(false);
        return (username !== '' && email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword);
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
        <ScrollView style={styles.container}>
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
                    usernameValid ? null : 'Please enter username'
                }
                placeholderTextColor={myBlue}
                placeholder='username'
                onChangeText={text => {
                    setUsername(text);
                    setUsernameValid(true);
                    setStatus(null);
                }}
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='email' type='fontisto' color={myBlue} size={18}/>
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
                    setStatus(null);
                }}
            />
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='phone' type='antdesign' color={myBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    phoneNumberValid ? null : 'Please enter username'
                }
                placeholderTextColor={myBlue}
                placeholder='phone number'
                onChangeText={text => {
                    setPhoneNumber(text);
                    setPhoneNumberValid(true);
                    setStatus(null);
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
                    setStatus(null);
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
                    setStatus(null);
                }}
            />
            {renderStatus(status)}
            <PrimaryButton
                title='Register'
                onPress={() => {
                    if (validateInput(username, email, phoneNumber, password, confirmPassword)) {
                        setStatus(registerAccount(email, password));

                    }
                }}
            />
            <TouchableOpacity onPress={() => (navigation.navigate(screenKey.LoginScreen))}>
                <Text style={styles.loginText}>
                    Already have an account? Login here!
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Register;

