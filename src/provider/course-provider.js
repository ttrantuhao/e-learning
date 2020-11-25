import React, {useContext, useState} from 'react';

const CourseContext = React.createContext();

const CourseProvider = ({children}) => {
    const [favoriteCourses, setFavoriteCourses] = useState(null);
    const [myCourses, setMyCourses] = useState(null);
    const [hotCourses, setHotCourses] = useState(null);
    const [newCourses, setNewCourses] = useState(null);

    const initCourseContext = (myCourses, favoriteCourses, hotCourses, newCourses) => {
        setFavoriteCourses(favoriteCourses);
        setMyCourses(myCourses);
        setHotCourses(hotCourses);
        setNewCourses(newCourses);
        return true;
    }

    return (
        <CourseContext.Provider value={{
            initCourseContext,
            favoriteCourses,
            setFavoriteCourses,
            myCourses,
            setMyCourses,
            hotCourses,
            setHotCourses,
            newCourses,
            setNewCourses
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export {CourseProvider, CourseContext};
