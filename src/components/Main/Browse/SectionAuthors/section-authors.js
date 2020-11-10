import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import {myWhite} from "../../../../globals/styles";
import AuthorItem from "./AuthorItem/author-item";

const SectionAuthors = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top authors</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topAuthor}
                renderItem={({item}) => <AuthorItem item={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        color: myWhite,
        margin: 5,
        marginBottom: 10
    }
})

export default SectionAuthors;
