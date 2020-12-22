import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input, SocialIcon} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import Error from "../../Common/error";

const Login = ({navigation}) => {
    //handle input
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //handle valid input
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const authContext = useContext(AuthenticationContext)

    const validateInput = (email, password) => {
        if (email === '')
            setEmailValid(false);
        if (password === '')
            setPasswordValid(false);
        return (email !== '' && password !== '');
    }

    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={myBlue} size={70}/>
            <Text style={styles.title}>Login</Text>
            {authContext.state.isAuthenticating && <MyActivityIndicator/>}
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
                    setUsername(text);
                    setEmailValid(true);
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
            {authContext.state.errMessage && <Error message={authContext.state.errMessage}/>}
            <PrimaryButton
                title='Login'
                onPress={() => {
                    if (validateInput(email, password)) {
                        authContext.login(email, password);
                    }
                }}
            />
            <SocialIcon
                title='Sign In With Google'
                button
                type='google'
                style={{height: 45}}
                onPress={async () => {authContext.loginGoogle();}}
            />

            <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => (navigation.navigate(screenKey.ForgetPasswordScreen))}>
                    <Text style={{color: myBlue}}>
                        Forget password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => (navigation.navigate(screenKey.RegisterScreen))}>
                    <Text style={{color: myBlue}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

