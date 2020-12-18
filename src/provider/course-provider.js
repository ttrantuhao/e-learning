import React, {useContext, useReducer} from 'react';

import {CourseReducer} from "../reducer/course-reducer";
import {getHotCourse, getMyCourse, getNewCourse} from "../action/course-action";
import {AuthenticationContext} from "./authentication-provider";

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
    const authContext = useContext(AuthenticationContext);
    // console.log(authContext.state.token);
    return (
        <CourseContext.Provider value={{
            state,
            getNewCourse: getNewCourse(dispatch),
            getHotCourse: getHotCourse(dispatch),
            getMyCourse: getMyCourse(dispatch, authContext.state.token),
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export {CourseProvider, CourseContext};
