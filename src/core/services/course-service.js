import {comments, favoriteCourses, hotCourses, myCourses, newCourses, popularSkills} from "../../globals/mockData";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const token  = AsyncStorage.getItem('token');
axios.defaults.headers.Authorization = `Bearer ${token}`;
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

