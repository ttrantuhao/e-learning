import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const token  = AsyncStorage.getItem('token');
axios.defaults.headers.Authorization = `Bearer ${token}`;
axios.defaults.baseURL = 'http://api.dev.letstudy.org';

export const apiRegister = (username, email, phoneNumber, password) => {
    return axios.post("/user/register", {
        username,
        email,
        phone: phoneNumber,
        password
    })
}

export const apiChangeEmail = (newEmail) => {
    return axios.put("/user/change-user-email", {
        newEmail
    })
}

export const apiChangePassword = ({id, oldPass, newPass}) => {
    return axios.post("/user/change-password", {
        id,
        oldPass,
        newPass
    })
}

export const apiUpdateProfile = (name, avatar, phone) => {
    return axios.put("/user/update-profile", {
        name,
        avatar,
        phone
    })
}
