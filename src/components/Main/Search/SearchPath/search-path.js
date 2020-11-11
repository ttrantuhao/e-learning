import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { paths} from "../../../../globals/mockData";
import {mySilver} from "../../../../globals/styles";
import SearchPathItem from "./SearchPathItem/search-path-item";

const SearchPath = () => {
    const renderSeparator = () => (<View style={styles.separator}/>);
    const header = (resultNumber) => {
        return (
            <Text style={styles.header}>
                {`${resultNumber} Results`}
            </Text>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={paths}
                renderItem={({item}) => (<SearchPathItem item={item}/>)}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={() => header(10)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        fontSize: 13,
        marginBottom: 20
    },
    container: {
        margin: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        margin: 5
    }
})

export default SearchPath;
