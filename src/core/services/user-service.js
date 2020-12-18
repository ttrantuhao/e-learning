import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('token');
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

export const apiUpdateProfile = async (name, avatar, phone) => {
    const token = await AsyncStorage.getItem('token');
    console.log(token)
    if(avatar) {
        return axios.put("/user/update-profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    return axios.put("/user/update-profile", {
        name,
        phone
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiUpdateEmail = (newEmail) => {
    return axios.put("/user/change-user-email", {
        newEmail
    })
}

export const apiUpdatePassword = ({id, oldPass, newPass}) => {
    return axios.post("/user/change-password", {
        id,
        oldPass,
        newPass
    })
}


