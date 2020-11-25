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
    const {authUser} = useContext(AuthenticationContext);
    const {initCourseContext} = useContext(CourseContext);
    const token = authUser.token;

    useEffect(() => {
        const initCourse = async () => {
            let myCourses = await getMyCourses(token).courses;
            let favoriteCourses = await getFavoriteCourses(token).courses;
            const hotCourses = await getHotCourses().courses;
            const newCourses = await getNewCourses().courses;
            if (initCourseContext(myCourses, favoriteCourses, hotCourses, newCourses)) {
                favoriteCourses = favoriteCourses.filter(item => item.isFavorite = true);
                // myCourses = myCourses.filter(item => item.isMine = true);
                setIsLoad(true);
            }
        }

        initCourse();

    }, [])

    if(!isLoad) {
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
    } else {
        navigation.navigate(screenKey.MainTab);
        return (
            <View>

            </View>
        )
    }

};

export default SplashScreen;
