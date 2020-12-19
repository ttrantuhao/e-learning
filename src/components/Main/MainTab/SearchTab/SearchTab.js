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
import {apiSearch} from "../../../../core/services/search-service";

const SearchTabNavigator = createMaterialTopTabNavigator();

const SearchTab = () => {
    const {theme} = useContext(ThemeContext);
    const [value, setValue] = useState('');
    const [isSearch, setIsSearch] = useState(true);
    const [history, setHistory] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [courses, setCourses] = useState([]);
    const [author, setAuthor] = useState([]);
    // const [isLoading, setIsLoading] =
    
    const handleSearch = (keyword) => {
        // if (value === 'abc')
        //     setNoResult(true)
        // else
        //     setIsSearch(false);
        if(keyword !== '') {
            console.log(keyword);
            apiSearch(keyword, 10, 1).then(res => {
                setCourses(res.data.payload.courses.data);
                setAuthor(res.data.payload.instructors.data);
                console.log(courses);
                if(courses.length === 0 && author.length ===0)
                    setNoResult(true);
                else
                    setIsSearch(false);
            }).catch(err => {
                console.log("err search: ", err.response.data);
            })
        }

    }

    const onPressItemHistory = (item) => {
        setValue(item.content);
        handleSearch(item.content)
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
                    paddingTop: 25,
                    backgroundColor: theme.colors.card,
                }}
                inputContainerStyle={{
                    marginRight: 5,
                    marginLeft: 5,
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
                                                   initialParams={{courses}}
                        />
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
