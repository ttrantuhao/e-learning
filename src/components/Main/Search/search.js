import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from "../../../provider/theme-provider";
import {Icon, SearchBar} from "react-native-elements";
import {apiDeleteSearchHistory, apiGetSearchHistory, apiSearch} from "../../../core/services/search-service";
import {myLightWhite} from "../../../globals/styles";
import SearchResult from "./SearchResult/search-result";

const Search = () => {
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
            marginVertical: 10,
            color: theme.colors.text
        }
    })
    const [value, setValue] = useState('');
    const [isSearch, setIsSearch] = useState(true);
    const [history, setHistory] = useState([]);
    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiGetSearchHistory().then(res => {
            setHistory(res.data.payload.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }, [])

    const reloadHistory = () => {
        apiGetSearchHistory().then(res => {
            setHistory(res.data.payload.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }

    const handleSearch = (keyword) => {
        if (keyword !== '') {
            setIsLoading(true);
            setIsSearch(false);
            apiSearch(keyword, 10, 0).then(res => {
                setCourses(res.data.payload.courses.data);
                setAuthors(res.data.payload.instructors.data);
                setIsLoading(false);
                reloadHistory();
            }).catch(err => {
                console.log("err search: ", err.response.data);
            })
        }
    }

    const onPressItemHistory = (item) => {
        setValue(item.content);
        handleSearch(item.content);
    }

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
            reloadHistory();
        }).catch(err => {
            console.log("err delete history: ", err.response.data);
        })
    }

    return (
        <>
            <SearchBar
                placeholder="Search..."
                onChangeText={(text) => {
                    setValue(text);
                    setIsSearch(true);
                }}
                value={value}
                cancelIcon={null}
                searchIcon={null}
                lightTheme={!theme.dark}
                style={{
                    color: theme.colors.text,
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
                containerStyle={{
                    paddingTop: 25,
                    backgroundColor: theme.colors.card,
                }}
                inputContainerStyle={{
                    marginRight: 5,
                    marginLeft: 5,
                    borderRadius: 10
                }}
                placeholderTextColor={theme.dark ? theme.colors.subtext : myLightWhite}
                onSubmitEditing={() => handleSearch(value)}
            />

            {isSearch ?
                <FlatList
                    style={styles.container}
                    data={history}
                    renderItem={({item}) => renderHistoryItem(item, () => onPressItemHistory(item))}
                    ListHeaderComponent={history.length === 0 ? null :
                        <Text style={styles.title}>Recent searches</Text>}
                    keyExtractor={item => item.id}
                />
                :
                <SearchResult courses={courses} authors={authors} isLoading={isLoading}/>
            }
        </>
    )

};

export default Search;
