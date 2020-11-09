import React from 'react';
import {ScrollView, View} from "react-native";
import ImageButton from "../../Common/image-button";
import {styles} from "./styles";
import SectionImageButtons from "./SectionImageButtons/section-image-buttons";
import SectionPaths from "./SectionPaths/section-paths";
import SectionAuthors from "./SectionAuthors/section-authors";
import SectionSkills from "./SectionSkills/section-skills";
import AppHeader from "../../Others/Header/app-header";

const Browse = () => {

    const onPressNewRelease = () => {
        console.log('on press new release!')
    }
    return (
        <View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ImageButton title={`NEW${'\n'}RELEASES`} onPress={onPressNewRelease}/>
                <ImageButton title={`RECOMMENDED${'\n'}FOR YOU`} onPress={onPressNewRelease}/>
                <SectionImageButtons/>
                <SectionSkills/>
                <SectionPaths/>
                <SectionAuthors/>
            </ScrollView>
        </View>


    );
};


export default Browse;
