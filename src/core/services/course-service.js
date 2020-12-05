import {comments, favoriteCourses, hotCourses, myCourses, newCourses, popularSkills} from "../../globals/mockData";

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
