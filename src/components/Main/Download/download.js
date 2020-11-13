import React from 'react';
import {View} from "react-native";
import ListCourse from "../../Course/ListCourse/list-course";

const Download = ({navigation}) => {
    return (
        <View>
            <ListCourse navigation={navigation}/>
        </View>
    );
};


export default Download;
