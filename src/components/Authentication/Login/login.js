import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LoginForm from "./LoginForm/login-form";
import {Icon} from "react-native-elements";
import PrimaryButton from "../../Common/primary-button";
import {themeColor} from "../../../globals/styles";

const Login = () => {
    return (
        <View style={styles.container}>
            <Icon name='account-circle' type={'material-community'} color={themeColor} size={70}/>
            <Text style={styles.title}>Login</Text>
            <LoginForm/>
            <PrimaryButton title='Login' onPress={() => {
            }}/>


            <View style={styles.textContainer}>
                {/*<PrimaryButton title='1'/>*/}
                {/*<PrimaryButton title='2'/>*/}
                <TouchableOpacity>
                    <Text style={{color: themeColor}}>
                        Forget password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color: themeColor}}>
                    Register
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        padding: 20
    },
    title: {
        color: themeColor,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 60,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    }
});
