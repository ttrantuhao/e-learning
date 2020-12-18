import {comments, favoriteCourses, hotCourses, myCourses, newCourses, popularSkills} from "../../globals/mockData";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


// axios.defaults.headers.Authorization = `Bearer ${token}`;
axios.defaults.baseURL = 'http://api.dev.letstudy.org';

export const getMyCourses = (token) => {
    // if(token !== 'abc')
    //     return {status: 404}
    return {status: 200, courses: myCourses}
}

export const getFavoriteCourses = (token) => {
    // if(token !== 'abc')
    //     return {status: 404}
    return {status: 200, courses: favoriteCourses}
}

export const getHotCourses = () => {
    return {status: 200, courses: hotCourses}
}

export const getNewCourses = () => {
    return {status: 200, courses: newCourses}
}

export const getSearchHistory = () => {
    return popularSkills.slice(0, 10);
}

export const getComment = () => {
    return comments;
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
