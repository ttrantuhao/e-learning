import {
    REQUESTING,
    REQUEST_NEW_COURSE_SUCCEEDED,
    REQUEST_FAILED,
    REQUEST_HOT_COURSE_SUCCEEDED, REQUEST_MY_COURSE_SUCCEEDED, REQUEST_RECOMMENDED_COURSE_SUCCEEDED
} from "../action/course-action";

export function CourseReducer(state, action) {
    switch (action.type) {
        case REQUESTING:
            return {...state, isLoading: true}
        case REQUEST_FAILED:
            return {...state, errMessage: action.data.message, isLoading: false}
        case REQUEST_NEW_COURSE_SUCCEEDED:
            return {...state, newCourse: action.data.payload, isLoading: false}
        case REQUEST_HOT_COURSE_SUCCEEDED:
            return {...state, hotCourse: action.data.payload, isLoading: false}
        case REQUEST_MY_COURSE_SUCCEEDED:
            return {...state, myCourse: action.data.payload, isLoading: false}
        case REQUEST_RECOMMENDED_COURSE_SUCCEEDED:
            return {...state, reCourse: action.data.payload, isLoading: false}
        default :
            throw new Error();
    }
}
