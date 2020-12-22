import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import Error from "../../Common/error";
import CustomAlert from "../../Common/custom-alert";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import {apiRegister} from "../../../core/services/user-service";

const Register = ({navigation}) => {
    const [errMessage, setErrMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
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

    const onPressRegister = () => {
        if (validateInput(username, email, phoneNumber, password, confirmPassword)) {
            setIsLoading(true);
            apiRegister(username, email, phoneNumber, password)
                .then(response => {
                    setIsLoading(false);
                    setShowSuccessModal(true);
                }).catch(err => {
                setIsLoading(false);
                setErrMessage(err.response.data.message)
            })
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={myBlue} size={70}/>
            <Text style={styles.title}>Register</Text>
            {isLoading && <MyActivityIndicator/>}
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
            {errMessage && <Error message={errMessage}/>}
            <PrimaryButton
                title='Register'
                onPress={onPressRegister}
            />
            <TouchableOpacity onPress={() => (navigation.navigate(screenKey.LoginScreen))}>
                <Text style={styles.loginText}>
                    Already have an account? Login here!
                </Text>
            </TouchableOpacity>
            <CustomAlert visible={showSuccessModal}
                         title="Register successfully!"
                         message={`Check ${email} to verify account.`}
                         onOk={() => navigation.navigate(screenKey.LoginScreen)}
            />
        </ScrollView>
    );
};

export default Register;

