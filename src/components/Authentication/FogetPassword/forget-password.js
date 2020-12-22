import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import {apiSendEmailForgetPassword, resetPassword} from "../../../core/services/authentication-service";
import Error from "../../Common/error";
import CustomAlert from "../../Common/custom-alert";
import MyActivityIndicator from "../../Common/my-activity-indicator";

const ForgetPassword = ({navigation}) => {
    const [emailValid, setEmailValid] = useState(true);
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState(null);
    const [visible, setVisible] = useState(false);

    const validateInput = (email) => {
        if (email === '')
            setEmailValid(false);
        return (email !== '');
    }

    const sendEmailForgetPassword = () => {
        if(validateInput(email)) {
            setIsLoading(true);
            apiSendEmailForgetPassword(email)
                .then(res => {
                    setIsLoading(false);
                    setErrMessage(null);
                    setVisible(true);
                }).catch(err => {
                    setIsLoading(false);
                    console.log(err.response);
                    setErrMessage(err.response.data.message);
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forget password</Text>
            {isloading && <MyActivityIndicator/>}
            <Input
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter email address'
                }
                placeholderTextColor={myBlue}
                placeholder='input your email'
                onChangeText={text => {
                    setEmail(text);
                    setStatus(null);
                    setEmailValid(true);
                }}
            />
            {errMessage && <Error message={errMessage}/>}
            <PrimaryButton title='reset password' onPress={sendEmailForgetPassword}/>
            <CustomAlert
                visible={visible}
                message='Please check your email to change password.'
                title='Send email successfully!'
                onOk={() => {
                    setVisible(false);
                    navigation.navigate(screenKey.LoginScreen)
                }}
            />
        </View>
    );
};

export default ForgetPassword;

