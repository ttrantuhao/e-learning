import React, {useContext, useEffect, useReducer} from 'react';
import SectionCourse from "./SectionCourse/section-course";
import {ScrollView} from "react-native";
import WelcomeImage from "./WelcomeImage/welcome-image";
import {CourseContext} from "../../../provider/course-provider";
import {screenKey} from "../../../globals/constants";
import axios from "axios";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import {myCourses} from "../../../globals/mockData";

const initialState = {data: myCourses, isLoading: true, isError: false};

function reducer(state, action) {
    switch (action.type) {
        case "REQUEST_NEW_COURSES_SUCCEEDED":
            return {...state, data: action.data, isLoading: false}
        default :
            throw new Error();
    }
}

const Home = ({navigation}) => {
    const {myCourses, newCourses, hotCourses} = useContext(CourseContext);
    // const [isLoading, setIsLoading] = useState(true);
    // const [myCourseOnl, setMyCourseOnl] = useState([]);
    // const [newCourseOnl, setNewCourseOnl] = useState([]);
    // const [hotCourseOnl, setHotCourseOnl] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const res = axios.post("https://api.letstudy.org/course/top-new", {
            limit: 10,
            page: 1
        })
            .then(response => {
                console.log(response.data);
                // setNewCourseOnl(response.data.payload);
                dispatch({type: "REQUEST_NEW_COURSES_SUCCEEDED", data: response.data.payload})
            })
            .catch(err => {
            })
            .finally(() => {
                // setIsLoading(false);
            })
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
                courses={myCourses}
                onPressSeeAll={() => onPressSeeAll(myCourses, 'My courses')}
            />
            <SectionCourse
                title='New courses'
                navigation={navigation}
                courses={newCourses}
                onPressSeeAll={() => onPressSeeAll(newCourses, 'New courses')}
            />
            <SectionCourse
                title='Hot courses'
                navigation={navigation}
                courses={hotCourses}
                onPressSeeAll={() => onPressSeeAll(hotCourses, 'Hot courses')}
            />
            <SectionCourse
                title='Recommended courses'
                navigation={navigation}
                courses={hotCourses}
                onPressSeeAll={() => onPressSeeAll(hotCourses, 'Recommended courses')}
            />
        </ScrollView>

    );
};

export default Home;
