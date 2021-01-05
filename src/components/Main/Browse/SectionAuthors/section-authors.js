import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import AuthorItem from "./AuthorItem/author-item";
import {ThemeContext} from "../../../../provider/theme-provider";

const SectionAuthors = () => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        container: {
            marginTop: 10,
            marginBottom: 10
        },
        title: {
            fontSize: 16,
            color: theme.colors.text,
            margin: 5,
            marginBottom: 10
        }
    })


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


export default SectionAuthors;
