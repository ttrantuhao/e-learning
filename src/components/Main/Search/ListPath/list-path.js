import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { paths} from "../../../../globals/mockData";
import {mySilver} from "../../../../globals/styles";
import ListPathItem from "./ListPathItem/list-path-item";

const ListPath = ({header}) => {
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
                data={paths}
                renderItem={({item, index}) => (<ListPathItem item={item} key={index}/>)}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={() => header()}
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
