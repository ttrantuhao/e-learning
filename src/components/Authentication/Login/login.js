import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myGray, mySilver, myLightWhite, myWhite, myDarkBlue} from "../../../globals/styles";
import {styles} from './styles'

const Login = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={myDarkBlue} size={70}/>
            <Text style={styles.title}>Login</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='user' type={'simple-line-icon'} color={myDarkBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor={myDarkBlue}
                placeholder='email'
            />

            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='lock' type={'simple-line-icon'} color={myDarkBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                placeholderTextColor={myDarkBlue}
                placeholder='password'
                secureTextEntry
                errorMessage={
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
            />
            <PrimaryButton title='Login' onPress={() => {}}/>
            <View style={styles.textContainer}>
                <TouchableOpacity>
                    <Text style={{color: myDarkBlue}}>
                        Forget password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: myDarkBlue}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

