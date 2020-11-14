import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { paths} from "../../../../globals/mockData";
import {mySilver} from "../../../../globals/styles";
import ListPathItem from "./ListPathItem/list-path-item";

const ListPath = () => {
    const renderSeparator = () => (<View style={styles.separator}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
              100 Results
            </Text>
            <FlatList
                data={paths}
                renderItem={({item, index}) => (<ListPathItem item={item}/>)}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={((item, index) => index.toString())}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        fontSize: 13,
        margin: 10
    },
    container: {
        marginBottom: 10,
        marginTop: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        margin: 5
    }
})

export default ListPath;
