import React, {useReducer} from 'react';

import {CourseReducer} from "../reducer/course-reducer";
import {getHotCourse, getMyCourse, getNewCourse, getRecommendedCourse} from "../action/course-action";

const CourseContext = React.createContext();

const initialState = {
    isLoading: false,
    errMessage: null,
    newCourse: [],
    hotCourse: [],
    myCourse: [],
    reCourse: []
};

const CourseProvider = ({children}) => {
    const [state, dispatch] = useReducer(CourseReducer, initialState);
    // console.log(authContext.state.token)
    return (
        <CourseContext.Provider value={{
            state,
            getNewCourse: getNewCourse(dispatch),
            getHotCourse: getHotCourse(dispatch),
            getMyCourse: getMyCourse(dispatch),
            getRecommendedCourse: getRecommendedCourse(dispatch)
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export {CourseProvider, CourseContext};
