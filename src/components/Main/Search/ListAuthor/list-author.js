import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import ListAuthorItem from "./ListAuthorItem/list-author-item";
import {mySilver} from "../../../../globals/styles";

const ListAuthor = ({header}) => {
    const renderSeparator = () => (<View style={styles.separator}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                100 Results
            </Text>
            <FlatList
                data={topAuthor}
                renderItem={({item, index}) => (<ListAuthorItem item={item}/>)}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={((item, index) => index.toString())}
                // ListHeaderComponent={() => header()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        // padding: 10,
        fontSize: 13,
        margin: 10
    },
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        margin: 5
    }
})

export default ListAuthor;
