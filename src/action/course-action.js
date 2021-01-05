import {
    apiGetMyCourse,
    apiGetNewCourse,
    apiGetRecommendedCourse,
    apiGetTopSellCourse
} from "../core/services/course-service";

export const REQUEST_NEW_COURSE_SUCCEEDED = "REQUEST_NEW_COURSE_SUCCEEDED";
export const REQUESTING = "REQUESTING"
export const REQUEST_FAILED = "REQUEST_FAILED"
export const REQUEST_HOT_COURSE_SUCCEEDED = "REQUEST_HOT_COURSE_SUCCEEDED"
export const REQUEST_MY_COURSE_SUCCEEDED = "REQUEST_MY_COURSE_SUCCEEDED"
export const REQUEST_RECOMMENDED_COURSE_SUCCEEDED = "REQUEST_RECOMMENDED_COURSE_SUCCEEDED"

export const getNewCourse = (dispatch) => (limit, page) => {
    dispatch({type: REQUESTING})
    apiGetNewCourse(limit, page).then(response => {
        // console.log("apiGetNewCourse", response.data.payload)
        dispatch({
            type: REQUEST_NEW_COURSE_SUCCEEDED,
            data: response.data
        })
    }).catch(err => {
        dispatch({
            type: REQUEST_FAILED,
            data: err.response.data
        })
    })
}

export const getMyCourse = (dispatch) => (token) => {
    dispatch({type: REQUESTING})
    apiGetMyCourse(token).then(response => {
        // console.log("getMyCourse", response.data.payload)
        dispatch({
            type: REQUEST_MY_COURSE_SUCCEEDED,
            data: response.data
        })
    }).catch(err => {
        dispatch({
            type: REQUEST_FAILED,
            data: err.response.data
        })
    })
}

export const getHotCourse = (dispatch) => (limit, page) => {
    dispatch({type: REQUESTING})
    apiGetTopSellCourse(limit, page).then(response => {
        // console.log("apiGetTopSellCourse", response.data.payload)
        dispatch({
            type: REQUEST_HOT_COURSE_SUCCEEDED,
            data: response.data
        })
    }).catch(err => {
        dispatch({
            type: REQUEST_FAILED,
            data: err.response.data
        })
    })
}

export const getRecommendedCourse = (dispatch) => (userId, limit, page) => {
    dispatch({type: REQUESTING})
    apiGetRecommendedCourse(userId, limit, page).then(response => {
        // console.log("apiGetTopSellCourse", response.data.payload)
        dispatch({
            type: REQUEST_RECOMMENDED_COURSE_SUCCEEDED,
            data: response.data
        })
    }).catch(err => {
        dispatch({
            type: REQUEST_FAILED,
            data: err.response.data
        })
    })
}
