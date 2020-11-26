import React, {useContext, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListPath from "../../Search/ListPath/list-path";
import ListAuthor from "../../Search/ListAuthor/list-author";
import ListAllStack from "./ListAllStack/ListAllStack";
import {SearchBar} from "react-native-elements";
import {myLightWhite, mySilver, myWhite, navColor} from "../../../../globals/styles";
import ListCourseStack from "./ListCourseStack/ListCourseStack";
import {screenKey} from "../../../../globals/constants";
import {ThemeContext} from "../../../../provider/theme-provider";
import {createStackNavigator} from "@react-navigation/stack";

const SearchTabNavigator = createMaterialTopTabNavigator();

const SearchTab = () => {
    const {theme} = useContext(ThemeContext);
    const [value, setValue] = useState('');
    const [isHideSearchBar, setIsHideSearchBar] = useState(true);

    return (
        <>
            {isHideSearchBar ? <SearchBar
                placeholder="Search..."
                onChangeText={(text) => setValue(text)}
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
            /> : <></>}

            <SearchTabNavigator.Navigator
                tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
            >
                <SearchTabNavigator.Screen name={screenKey.ListAllStack} component={ListAllStack}
                                           options={{title: 'ALL'}}/>
                <SearchTabNavigator.Screen name={screenKey.ListCourseStack} component={ListCourseStack}
                                           options={{title: 'COURSES'}}/>
                {/*<SearchTabNavigator.Screen name={screenKey.ListPathScreen} component={ListPath}*/}
                {/*                           options={{title: 'PATHS'}}/>*/}
                <SearchTabNavigator.Screen name={screenKey.ListAuthorScreen} component={ListAuthor}
                                           options={{title: 'AUTHORS'}}/>
            </SearchTabNavigator.Navigator>
        </>
    );
};

export default SearchTab;
