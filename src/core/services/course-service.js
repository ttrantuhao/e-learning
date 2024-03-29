import {popularSkills} from "../../globals/mockData";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://api.dev.letstudy.org';

export const getSearchHistory = () => {
    return popularSkills.slice(0, 10);
}

export const apiGetNewCourse = (limit, page) => {
    return axios.post("/course/top-new", {
        limit,
        page
    })
}

export const apiGetMyCourse = (token) => {
    return axios.get("/user/get-process-courses", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiGetTopSellCourse = (limit, page) => {
    return axios.post("/course/top-sell", {
        limit,
        page
    })
}

export const apiGetRecommendedCourse = (userId, limit, page) => {
    return axios.get(`/user/recommend-course/${userId}/${limit}/${page}`);
}

export const apiGetCourseDetail = async (id) => {
    // const token  = AsyncStorage.getItem('token');
    const userInfo = await AsyncStorage.getItem('userInfo')
    // console.log(`/course/get-course-detail/${id}`)
    return axios.get(`/course/get-course-detail/${id}/${userInfo.id}`);
}

export const apiCheckOwnCourse = async (id) => {
    const token  = await AsyncStorage.getItem('token');
    // console.log(token)
    return axios.get(`/user/check-own-course/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiGetCourseLikeStatus = async (id) => {
    const token  = await AsyncStorage.getItem('token');
    return axios.get(`/user/get-course-like-status/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiRatingCourse = async (courseId, point, content) => {
    const token  = await AsyncStorage.getItem('token');
    return axios.post(`/course/rating-course`, {
        courseId,
        formalityPoint: point,
        contentPoint: point,
        presentationPoint: point,
        content
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const apiGetFavoriteCourse = async () => {
    const token  = await AsyncStorage.getItem('token');
    return axios.get(`/user/get-favorite-courses`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiLikeCourse = async (courseId) => {
    const token  = await AsyncStorage.getItem('token');
    return axios.post(`/user/like-course`, {courseId},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiPaymentFreeCourse = async (courseId) => {
    const token  = await AsyncStorage.getItem('token');
    return axios.post(`/payment/get-free-courses`, {courseId},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiGetCategory = async () => {
    return axios.get(`/category/all`);
}
