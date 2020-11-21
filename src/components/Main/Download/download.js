import React from 'react';
import {View} from "react-native";
import ListCourse from "../../Course/ListCourse/list-course";

const Download = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        }
    })
    return (
        <View style={styles.container}>
            <ListCourse navigation={navigation}/>
        </View>
    );
};


export default Download;
