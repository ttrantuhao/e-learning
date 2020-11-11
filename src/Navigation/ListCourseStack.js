import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import {mySilver} from "../globals/styles";
import ListCourses from "../components/Courses/ListCourses/list-courses";
import CourseDetail from "../components/CourseDetail/course-detail";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const ListCourseStack = () => {
    const renderHeaderRight = () => {
        return (
            <View style={styles.rightHeader}>
                <Avatar
                    rounded
                    source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                    size='small'
                />
                <Icon name='more-vertical' type='feather' style={styles.icon} color={mySilver}
                      iconStyle={{marginLeft: 15}}/>
            </View>
        );
    }
    return (
        <Stack.Navigator initialRouteName='ListCourse' mode='modal'>
            <Stack.Screen
                name='ListCourse'
                component={ListCourses}
                options={({route}) => (
                    {
                        title: 'List Course',
                        headerRight: renderHeaderRight
                    }
                )}
            />
            <Stack.Screen
                name='CourseDetail'
                component={CourseDetail}
                options={({route}) => (
                    {
                        title: route.params.item.title,
                        headerShown: false
                    }
                )}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    rightHeader:  {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ListCourseStack;
