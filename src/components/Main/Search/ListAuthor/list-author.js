import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import ListAuthorItem from "./ListAuthorItem/list-author-item";
import {ThemeContext} from "../../../../provider/theme-provider";

const ListAuthor = ({route}) => {
    const {theme} = useContext(ThemeContext);
    console.log(route.params.authors);
    const styles = StyleSheet.create({
        header: {
            color: theme.colors.text,
            fontSize: 13,
            margin: 10,
            fontWeight: 'bold'
        },
        container: {
            flex: 1,
        },
        separator: {
            height: 1,
            backgroundColor: theme.colors.border,
            margin: 5
        }
    })
    const renderSeparator = () => (<View style={styles.separator}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {`${route.params.authors.length} Results`}
            </Text>
            <FlatList
                // style={{marginBottom: 20}}
                data={route.params.authors}
                renderItem={({item}) => (<ListAuthorItem item={item}/>)}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={((item) => item.id)}
            />
        </View>
    );
};



export default ListAuthor;
