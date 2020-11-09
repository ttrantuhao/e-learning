import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {popularSkills} from "../../../../globals/mockData";
import SkillItem from "./SkillItem/skill-item";
import {myDarkBlue, myGrayBlue, myMediumBlue} from "../../../../globals/styles";

const SectionSkills = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Skills</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popularSkills}
                renderItem={({item}) => <SkillItem title={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: myGrayBlue,
        margin: 5,
        marginBottom: 10
    }
})


export default SectionSkills;
