import axios from "axios";
import * as Google from "expo-google-app-auth";
import {ANDROID_CLIENT_ID} from "../../globals/constants";

export const apiLogin = (email, password) => {
    return axios.post("http://api.dev.letstudy.org/user/login", {
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
        return axios.post("http://api.dev.letstudy.org/user/login-google-mobile", {
            user: {
                email: user.email,
                id: user.id
            }
        });
    }
}

// export const resetPassword = (email) => {
//     if (email === 'tuhao99@gmail.com') {
//         return {status: 200}
//     }
//     return {status: 404, errorString: 'user does not exist'}
// }
