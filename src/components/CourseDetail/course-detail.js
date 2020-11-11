import React from 'react';
import {Button, Text, View} from 'react-native';
import {myWhite} from "../../globals/styles";

const CourseDetail = ({navigation, route}) => {
    console.log(route.params.item);
    const item = route.params.item;

    return (
        <View>
            <Text style={{color: myWhite}}>This is course detail</Text>
            <Button title={'Go to revelant course'} onPress={() => {
                navigation.push('CourseDetail')
            }}/>

            <Button title={'Go to list of course'} onPress={() => {
                navigation.navigate('ListCourse')
            }}/>
        </View>
    );
};

export default CourseDetail;
