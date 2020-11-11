import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import SearchAuthorItem from "./SearchAuthorItem/search-author-item";
import {mySilver} from "../../../../globals/styles";

const SearchAuthor = () => {
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
                data={topAuthor}
                renderItem={({item}) => (<SearchAuthorItem item={item}/>)}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={() => header(topAuthor.length)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color: mySilver,
        // padding: 10,
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

export default SearchAuthor;
