import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


axios.defaults.baseURL = 'http://api.dev.letstudy.org';


export const apiSearch = async (keyword, limit, page) => {
    const token = await AsyncStorage.getItem('token');
    return axios.post(`/course/search-history/${id}`,{
        token,
        keyword,
        limit,
        offset: page
    })
}

export const apiGetSearchHistory = async () => {
    const token = await AsyncStorage.getItem('token');
    return axios.get("/course/search-history", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiDeleteSearchHistory = async (id) => {
    const token = await AsyncStorage.getItem('token');
    return axios.delete(`/course/delete-search-history/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
