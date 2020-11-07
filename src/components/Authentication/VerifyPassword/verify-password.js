import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myGray} from "../../../globals/styles";
import {styles} from './styles'

const VerifyPassword = () => {
    const [codeValid, setCodeValid] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify password</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    codeValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor={myGray}
                placeholder='verify code'
            />
            <PrimaryButton title='Verify' onPress={() => {
            }}/>

        </View>
    );
};

export default VerifyPassword;

