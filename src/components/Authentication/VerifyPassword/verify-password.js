import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {styles} from './styles'
import {myBlue} from "../../../globals/styles";

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
                placeholderTextColor={myBlue}
                placeholder='verify code'
            />
            <PrimaryButton title='Verify' onPress={() => {
            }}/>

        </View>
    );
};

export default VerifyPassword;

