import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {topAuthor} from "../../../../globals/mockData";
import ListAuthorItem from "./ListAuthorItem/list-author-item";
import {mySilver} from "../../../../globals/styles";

const ListAuthor = ({header}) => {
    const renderSeparator = () => (<View style={styles.separator}/>);
    // const header = (resultNumber) => {
    //     return (
    //         <Text style={styles.header}>
    //             {`${resultNumber} Results`}
    //         </Text>
    //     );
    // }
    return (
        <View style={styles.container}>
            <FlatList
                data={topAuthor}
                renderItem={({item, index}) => (<ListAuthorItem item={item} key={index}/>)}
                ItemSeparatorComponent={renderSeparator}
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
        marginBottom: 20
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
