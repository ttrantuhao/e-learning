import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import ListCourse from "../../Course/ListCourse/list-course";
import MyActivityIndicator from "../../Common/my-activity-indicator";
import {apiGetFavoriteCourse} from "../../../core/services/course-service";

const Download = ({navigation}) => {

    const [likeCourse, setLikeCourse] = useState(null);

    useEffect(() => {
        apiGetFavoriteCourse().then(res => {
            setLikeCourse(res.data.payload);
        }).catch(err => {
            console.log("get like course err", err.response.message);
        })
    })

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        }
    })
    return (
        likeCourse ?
        <View style={styles.container}>
            <ListCourse navigation={navigation} courses={likeCourse}/>
        </View>
            :
            <MyActivityIndicator style={{flex: 1}}/>
    );
};


export default Download;
