import axios from "axios";
import * as Google from "expo-google-app-auth";
import {ANDROID_CLIENT_ID} from "../../globals/constants";

axios.defaults.baseURL = 'http://api.dev.letstudy.org';

export const apiLogin = (email, password) => {
    return axios.post("/user/login", {
        email,
        password
    })
}

export const apiLoginGoogle = async () => {
    const {type, user, accessToken} = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
    })
    // console.log("in apiLoginGG function", type, user)
    if (type === 'success') {
        // await Google.logOutAsync({accessToken});
        return axios.post("/user/login-google-mobile", {
            user: {
                email: user.email,
                id: user.id
            }
        });
    }
}

export const apiSendEmailForgetPassword = (email) => {
    return axios.post("/user/forget-pass/send-email", {email});
}

