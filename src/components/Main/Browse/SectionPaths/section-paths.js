import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {listCourses, paths} from "../../../../globals/mockData";
import PathItem from "./PathItem/path-item";
import ListHeader from "../../../Common/list-header";


const SectionPaths = () => {
    return (
        <View style={styles.container}>
            <ListHeader title='Paths'/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={paths}
                renderItem={({item}) => (<PathItem item={item}/>)}
            />
        </View>

    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        // marginBottom: 30
    },
})

export default SectionPaths;
