import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {paths} from "../../../globals/mockData";
import PathItem from "./PathItem/path-item";
import ListHeader from "../list-header";


const SectionPaths = ({title}) => {
    return (
        <View style={styles.container}>
            <ListHeader title={title}/>
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
        marginTop: 10,
        marginBottom: 10
    },
})

export default SectionPaths;
