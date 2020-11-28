import React, {useContext} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from "../../../provider/theme-provider";
import {Icon} from "react-native-elements";

const Search = ({history, onPressItemHistory, noResult}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 10
        },
        itemContainer: {
            flexDirection: 'row',
            margin: 7,
            alignItems: 'center'
        },
        title: {
            fontSize: 18,
            marginVertical: 10
        }
    })

    const renderHistoryItem = (item, onPress) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
                <Icon name='history' type='material-community' color={theme.colors.text}/>
                <Text style={{color: theme.colors.text, marginHorizontal: 10, fontSize: 16}}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const renderNoResult = () => {
        return (
            <View style={{alignItems: "center"}}>
                <Icon name='search1' type='antdesign' color={theme.colors.text} size={100} style={{marginVertical: 40}}/>
                <Text style={{color: theme.colors.text, fontSize: 16, textAlign: "center"}}>Sorry, we couldn't find any matches results!</Text>
            </View>
        )
    }

    return (
        noResult ?
            renderNoResult() :
            <FlatList
                style={styles.container}
                data={history}
                renderItem={({item}) => renderHistoryItem(item, () => onPressItemHistory(item))}
                ListHeaderComponent={history.length === 0 ? null : <Text style={styles.title}>Recent searches</Text>}
            />
    )
};

export default Search;
