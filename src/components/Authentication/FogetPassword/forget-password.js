import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";

const ForgetPassword = ({navigation}) => {
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
            <PrimaryButton title='reset password' onPress={() => (navigation.navigate(screenKey.LoginScreen))}/>
        </View>
    );
};

export default ForgetPassword;

