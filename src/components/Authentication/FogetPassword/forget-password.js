import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import {resetPassword} from "../../../core/services/authentication-service";

const ForgetPassword = ({navigation}) => {
    const [emailValid, setEmailValid] = useState(true);
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');
    const validateInput = (email) => {
        if (email === '')
            setEmailValid(false);
        return (email !== '');
    }
    const renderStatus = (status) => {
        if (status && status.status === 404)
            return <Text style={{...styles.errorInputStyle, textAlign: 'center'}}>{status.errorString}</Text>
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forget password</Text>
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
            {renderStatus(status)}
            <PrimaryButton title='reset password' onPress={() => {
                if(validateInput(email)) {
                    setStatus(resetPassword(email));
                    if(status && status.status === 200)
                        navigation.navigate(screenKey.LoginScreen);
                }
            }}/>
        </View>
    );
};

export default ForgetPassword;

