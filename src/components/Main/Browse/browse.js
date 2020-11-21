import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import SectionImageButtons from "./SectionImageButtons/section-image-buttons";
import SectionPaths from "../../Common/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";
import {ThemeContext} from "../../../provider/theme-provider";

const Browse = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SectionImageButtons/>
                <SectionSkills/>
                <SectionPaths title='Paths'/>
                <SectionAuthors/>
            </ScrollView>
        </View>
    );
};


export default Browse;
