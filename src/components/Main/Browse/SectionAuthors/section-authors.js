import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import SkillItem from "../SectionSkills/SkillItem/skill-item";
import {myDarkBlue, myGrayBlue} from "../../../../globals/styles";
import AuthorItem from "./AuthorItem/author-item";

const SectionAuthors = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top authors</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topAuthor}
                renderItem={({item}) => <AuthorItem item={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        marginBottom: 30
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: myGrayBlue,
        margin: 5,
        marginBottom: 10
    }
})

export default SectionAuthors;
