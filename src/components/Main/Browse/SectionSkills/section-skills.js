import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {popularSkills} from "../../../../globals/mockData";
import SkillItem from "./SkillItem/skill-item";
import {myWhite} from "../../../../globals/styles";
import SmallButton from "../../../Common/small-button";

const SectionSkills = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Skills</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popularSkills}
                renderItem={({item}) => <SmallButton title={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        color: myWhite,
        margin: 5,
        marginBottom: 10
    }
})


export default SectionSkills;
