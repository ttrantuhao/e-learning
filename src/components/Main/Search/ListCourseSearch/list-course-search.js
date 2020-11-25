import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListCourse from "../../../Course/ListCourse/list-course";
import {ThemeContext} from "../../../../provider/theme-provider";

const ListCourseSearch = ({navigation}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        header: {
            color: theme.colors.text,
            fontSize: 13,
            margin: 10,
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                100 Results
            </Text>
            <ListCourse navigation={navigation} courses={[]}/>
        </View>
    );
};

export default ListCourseSearch;
