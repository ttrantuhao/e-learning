import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'

const Login = ({navigation, route}) => {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={myBlue} size={70}/>
            <Text style={styles.title}>Login</Text>
            <Input
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                    <Icon name='user' type={'simple-line-icon'} color={myBlue} size={18}/>
                }
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorInputStyle}
                errorMessage={
                    emailValid ? null : 'Please enter a valid email address'
                }
                placeholderTextColor={myBlue}
                placeholder='email'
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
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
            />
            <PrimaryButton title='Login' onPress={route.params.func}/>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => (navigation.navigate('ForgetPassword'))}>
                    <Text style={{color: myBlue}}>
                        Forget password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate('Register'))}>
                    <Text style={{color: myBlue}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

