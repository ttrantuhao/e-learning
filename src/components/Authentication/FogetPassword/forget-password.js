import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue, myGray} from "../../../globals/styles";
import {styles} from './styles'

const ForgetPassword = () => {
    const [emailValid, setEmailValid] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forget password</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor={myBlue}
                placeholder='input your email'
            />
            <PrimaryButton title='reset password' onPress={() => {
            }}/>

        </View>
    );
};

export default ForgetPassword;

