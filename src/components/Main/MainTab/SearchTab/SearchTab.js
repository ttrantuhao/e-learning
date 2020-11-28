import React, {useContext, useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListAuthor from "../../Search/ListAuthor/list-author";
import ListAllStack from "./ListAllStack/ListAllStack";
import {SearchBar} from "react-native-elements";
import {myLightWhite} from "../../../../globals/styles";
import ListCourseStack from "./ListCourseStack/ListCourseStack";
import {screenKey} from "../../../../globals/constants";
import {ThemeContext} from "../../../../provider/theme-provider";
import Search from "../../Search/search";
import {getSearchHistory} from "../../../../core/services/course-service";

const SearchTabNavigator = createMaterialTopTabNavigator();

const SearchTab = () => {
    const {theme} = useContext(ThemeContext);
    const [value, setValue] = useState('');
    const [isSearch, setIsSearch] = useState(true);
    const [history, setHistory] = useState([]);
    const [noResult, setNoResult] = useState(false);

    const handleSearch = () => {
        if (value === 'abc')
            setNoResult(true)
        else
            setIsSearch(false);
    }

    const onPressItemHistory = (keyword) => {
        setValue(keyword);
        setIsSearch(false);
    }

    useEffect(() => {
        const getHistory = getSearchHistory();
        setHistory(getHistory);
    }, [])

    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => navigation.navigate(route.name),
    });

    return (
        <>
            <SearchBar
                placeholder="Search..."
                onChangeText={(text) => {
                    setValue(text);
                    setIsSearch(true);
                    setNoResult(false);
                    if (text === '')
                        setHistory(getSearchHistory());
                    else
                        setHistory([]);
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
                    // marginTop: 20,
                    paddingTop: 25,
                    backgroundColor: theme.colors.card,
                }}
                inputContainerStyle={{
                    // backgroundColor: theme.colors.card
                    marginRight: 5,
                    marginLeft: 5,
                    // paddingTop: 20,
                    borderRadius: 10
                }}
                placeholderTextColor={theme.dark ? theme.colors.subtext : myLightWhite}
                onSubmitEditing={handleSearch}
            />

            {
                isSearch ?
                    <Search history={history} onPressItemHistory={onPressItemHistory} noResult={noResult}/> :
                    <SearchTabNavigator.Navigator
                        tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
                    >
                        <SearchTabNavigator.Screen name={screenKey.ListAllStack} component={ListAllStack}
                                                   options={{title: 'ALL'}}
                                                   listeners={tabBarListeners}
                        />
                        <SearchTabNavigator.Screen name={screenKey.ListCourseStack} component={ListCourseStack}
                                                   options={{title: 'COURSES'}}
                                                   listeners={tabBarListeners}
                        />
                        {/*<SearchTabNavigator.Screen name={screenKey.ListPathScreen} component={ListPath}*/}
                        {/*                           options={{title: 'PATHS'}}/>*/}
                        <SearchTabNavigator.Screen name={screenKey.ListAuthorScreen} component={ListAuthor}
                                                   options={{title: 'AUTHORS'}}
                                                   listeners={tabBarListeners}
                        />
                    </SearchTabNavigator.Navigator>
            }
        </>
    );
};

export default SearchTab;
