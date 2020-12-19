import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from "../../../provider/theme-provider";
import {Icon} from "react-native-elements";
import {apiDeleteSearchHistory, apiGetSearchHistory} from "../../../core/services/search-service";

const Search = ({onPressItemHistory, noResult}) => {
    const {theme} = useContext(ThemeContext);
    const [history, setHistory] = useState([]);
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
            marginVertical: 10,
            color: theme.colors.text
        }
    })

    useEffect(() => {
        apiGetSearchHistory().then(res => {
            setHistory(res.data.payload.data);
            // console.log(res.data)
        }).catch(err => {
            console.log(err.response.data);
        })
    })

    const renderHistoryItem = (item, onPress) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={onPress} style={{flexDirection: "row", flex: 1}}>
                    <Icon name='history' type='material-community' color={theme.colors.text}/>
                    <Text style={{
                        color: theme.colors.text,
                        marginHorizontal: 10,
                        fontSize: 16,
                    }}>{item.content}</Text>
                </TouchableOpacity>
                <Icon name='clear' type='material' color={theme.colors.text} onPress={() => onDeleteHistory(item.id)}/>
            </View>
        )
    }

    const onDeleteHistory = (id) => {
        console.log(id)
        apiDeleteSearchHistory(id).then(res => {
            setHistory(history.filter((item) => item.id !== id));
        }).catch(err => {
            console.log("err delete history: ", err.response.data);
        })
    }

    const renderNoResult = () => {
        return (
            <View style={{alignItems: "center"}}>
                <Icon name='search1' type='antdesign' color={theme.colors.text} size={100}
                      style={{marginVertical: 40}}/>
                <Text style={{color: theme.colors.text, fontSize: 16, textAlign: "center"}}>Sorry, we couldn't find any
                    matches results!</Text>
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
                keyExtractor={item => item.id}
            />
    )
};

export default Search;
