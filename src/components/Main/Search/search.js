import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {bgColor, myWhite} from "../../../globals/styles";
import {color} from "react-native-reanimated";
import ListHeader from "../../Common/list-header";
import ListCourse from "../../Course/ListCourse/list-course";
import ListPath from "./ListPath/list-path";
import ListAuthor from "./ListAuthor/list-author";

const Search = ({navigation}) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ListCourse header={() => <ListHeader title='Courses' rightTitle='100 Results'/>}/>
            <ListPath header={() => <ListHeader title='Paths' rightTitle='100 Results'/>}/>
            <ListAuthor header={() => <ListHeader title='Authors' rightTitle='100 Results'/>}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
        flex: 1,
        paddingTop: 20,
        padding: 10
    },

})

export default Search;
