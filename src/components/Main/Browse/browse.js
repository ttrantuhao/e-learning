import React from 'react';
import {ScrollView, View} from "react-native";
import SectionImageButtons from "./SectionImageButtons/section-image-buttons";
import SectionPaths from "../../Common/SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";

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
