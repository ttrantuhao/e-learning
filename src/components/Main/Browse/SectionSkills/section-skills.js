import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {popularSkills} from "../../../../globals/mockData";
import SkillItem from "./SkillItem/skill-item";
import {myWhite} from "../../../../globals/styles";
import SmallButton from "../../../Common/small-button";
import {ThemeContext} from "../../../../provider/theme-provider";

const SectionSkills = () => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        container: {
            marginTop: 10,
            marginBottom: 10
        },
        title: {
            fontSize: 16,
            color: theme.colors.text,
            margin: 5,
            marginBottom: 10
        }
    })
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




export default SectionSkills;
