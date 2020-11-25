import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {styles} from './styles'
import {myBlue} from "../../../globals/styles";
import {screenKey} from "../../../globals/constants";
import {verifyAccount} from "../../../core/services/authentication-service";

const VerifyEmail = ({navigation, route}) => {
    const [code, setCode] = useState('');
    const [codeValid, setCodeValid] = useState(true);
    const [status, setStatus] = useState(null);
    const email = route.params.email;
    const validateInput = (code) => {
        if (code === '')
            setCodeValid(false);
        return (code !== '');
    }
    const renderStatus = (status) => {
        if (status && status.status === 400)
            return <Text style={{...styles.errorInputStyle, textAlign: 'center'}}>{status.errorString}</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify email</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    codeValid ? null : 'Please enter code'
                }
                placeholderTextColor={myBlue}
                placeholder='verification code'
                onChangeText={text => {
                    setCodeValid(true);
                    setStatus(null);
                    setCode(text);
                }}
            />
            {renderStatus(status)}
            <PrimaryButton title='Verify' onPress={() => {
                if(validateInput(code)) {
                    setStatus(verifyAccount(email, code))
                    if(status && status.status === 200) {
                        // console.log(status);
                        navigation.navigate(screenKey.LoginScreen);
                    }
                }
            }}/>

        </View>
    );
};

export default VerifyEmail;

