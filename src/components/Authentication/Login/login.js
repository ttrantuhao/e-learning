import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {myBlue} from "../../../globals/styles";
import {styles} from './styles'
import {login} from "../../../core/services/authentication-service";
import {screenKey} from "../../../globals/constants";

const Login = ({navigation, route}) => {
    //handle input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //handle valid input
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    //handle login
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (status && status.status === 200) {
            route.params.loginFunc();
        }
    })

    const renderStatus = (status) => {
        if(status) {
            if(status.status === 404)
                return <Text style={{color: 'red', textAlign: 'center'}}>{status.errorString}</Text>
            else if(status.status === 200)
                return <Text style={{color: 'red',textAlign: 'center'}}>Login successfully!</Text>
        }

    }

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
                    emailValid ? null : 'Please enter a valid username address'
                }
                placeholderTextColor={myBlue}
                placeholder='username'
                // value={username}
                onChangeText={text => {
                    setUsername(text);
                    setStatus(null);
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
                    passwordValid ? null : 'Please enter at least 8 characters'
                }
                // value={password}
                onChangeText={text => {
                    setPassword(text);
                    setStatus(null);
                }}
            />
            {renderStatus(status)}
            <PrimaryButton title='Login'
                           // onPress={route.params.loginFunc}
                            onPress={() => {
                                setStatus(login(username, password))
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

