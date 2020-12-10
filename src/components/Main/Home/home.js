import React, {useContext, useEffect, useReducer} from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView} from "react-native";
import WelcomeImage from "./WelcomeImage/welcome-image";
import {CourseContext} from "../../../provider/course-provider";
import {screenKey} from "../../../globals/constants";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import {myCourses} from "../../../globals/mockData";
import {CourseReducer} from "../../../reducer/course-reducer";
import {getHotCourse, getMyCourse, getNewCourse} from "../../../action/course-action";
import {AuthenticationContext} from "../../../provider/authentication-provider";

const initialState = {
    data: myCourses,
    isLoading: false,
    errMessage: null,
    newCourse: [],
    hotCourse: [],
    myCourses: [],
    reCourse: []
};

const Home = ({navigation}) => {
    const {myCourses, hotCourses} = useContext(CourseContext);
    const authContext = useContext(AuthenticationContext)
    // console.log("home component", authContext.state);
    const [state, dispatch] = useReducer(CourseReducer, initialState);

    useEffect(() => {
        getNewCourse(dispatch, 10, 1);
        getHotCourse(dispatch, 10, 1);
        getMyCourse(dispatch, authContext.state.token);
    }, [])

    const onPressSeeAll = (courses, title) => {
        navigation.navigate(screenKey.ListCourse, {courses, title});
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <WelcomeImage/>
            {state.isLoading && <MyActivityIndicator/>}
            <SectionCourse
                title='My courses'
                navigation={navigation}
                courses={state.myCourse}
                onPressSeeAll={() => onPressSeeAll(state.myCourse, 'My courses')}
            />
            <SectionCourse
                title='New courses'
                navigation={navigation}
                courses={state.newCourse}
                onPressSeeAll={() => onPressSeeAll(state.newCourse, 'New courses')}
            />
            <SectionCourse
                title='Hot courses'
                navigation={navigation}
                courses={state.hotCourse}
                onPressSeeAll={() => onPressSeeAll(state.hotCourse, 'Hot courses')}
            />
        </ScrollView>

    );
};

export default Home;
