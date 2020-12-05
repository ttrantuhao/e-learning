import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {screenKey} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import MyActivityIndicator from "../../Common/my-activity-indicator";

const Login = ({navigation}) => {
    // const {setIsAuth, setAuthUser, setToken} = useContext(AuthenticationContext);
    //handle input
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //handle valid input
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    //handle login
    // const [status, setStatus] = useState(null);
    const authContext = useContext(AuthenticationContext)

    const validateInput = (email, password) => {
        if (email === '')
            setEmailValid(false);
        if (password === '')
            setPasswordValid(false);
        return (email !== '' && password !== '');
    }

    // useEffect(() => {
    //     if (status && status.status === 200) {
    //         setAuthUser(status.userInfo);
    //         setToken(status.token);
    //         setIsAuth(true);
    //         console.log(status)
    //     }
    // }, [status])

    const renderStatus = (errMessage) => {
        if (errMessage)
            return <Text style={{...styles.errorInputStyle, textAlign: 'center'}}>{errMessage}</Text>
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
                    // setStatus(null);
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
                    // setStatus(null);
                }}
            />
            {renderStatus(authContext.state.errMessage)}
            <PrimaryButton
                title='Login'
                onPress={() => {
                    if (validateInput(email, password)) {
                        // setStatus(login(email, password))
                        authContext.login(email, password);
                    }
                }}
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

