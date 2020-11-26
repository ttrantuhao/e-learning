import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {bgColor, myBlue} from "../../../globals/styles";
import * as Progress from 'react-native-progress';
import {screenKey} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {CourseContext} from "../../../provider/course-provider";
import {getFavoriteCourses, getHotCourses, getMyCourses, getNewCourses} from "../../../core/services/course-service";


const SplashScreen = ({navigation}) => {
    const [isLoad, setIsLoad] = useState(false);
    const {token} = useContext(AuthenticationContext);
    const {initCourseContext} = useContext(CourseContext);
    useEffect(() => {
        const initCourse = () => {
            let myCourses = getMyCourses(token).courses;
            let favoriteCourses = getFavoriteCourses(token).courses;
            const hotCourses = getHotCourses().courses;
            const newCourses = getNewCourses().courses;
            if (initCourseContext(myCourses, favoriteCourses, hotCourses, newCourses)) {
                favoriteCourses = favoriteCourses.filter(item => item.isFavorite = true);
                // myCourses = myCourses.filter(item => item.isMine = true);
                navigation.navigate(screenKey.MainTab);
            }

        }
        initCourse();
    }, [])

    return (
        <View style={{justifyContent: "center", flex: 1, padding: 20}}>
            <Text style={{color: myBlue, textAlign: "center", marginVertical: 20, fontSize: 18}}>Loading...</Text>
            <Progress.Bar
                // progress={0.3}
                width={null}
                animated={true}
                color={myBlue}
                height={15}
                borderRadius={10}
                useNativeDriver={true}
                indeterminate={true}
            />
        </View>
    );
};

export default SplashScreen;
