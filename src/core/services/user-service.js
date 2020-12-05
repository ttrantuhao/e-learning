import axios from "axios";

export const apiRegister = (username, email, phoneNumber, password) => {
    return axios.post("http://api.dev.letstudy.org/user/register", {
        username,
        email,
        phone: phoneNumber,
        password
    })
}
