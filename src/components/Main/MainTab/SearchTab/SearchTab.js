import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListPath from "../../Search/ListPath/list-path";
import ListAuthor from "../../Search/ListAuthor/list-author";
import ListAllStack from "./ListAllStack/ListAllStack";
import {SearchBar} from "react-native-elements";
import {mySilver, myWhite, navColor} from "../../../../globals/styles";
import ListCourseStack from "./ListCourseStack/ListCourseStack";

const SearchTabNavigator = createMaterialTopTabNavigator();


const SearchTab = () => {
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
                style={{
                    color: myWhite,
                    paddingLeft: 15,
                    paddingRight: 15
                }}
                containerStyle={{
                    marginTop: 20,
                    backgroundColor: navColor,
                }}
                placeholderTextColor={mySilver}
            /> : <></>}

            <SearchTabNavigator.Navigator
                tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
            >
                <SearchTabNavigator.Screen name='ListAllStack' component={ListAllStack} options={{title: 'ALL'}}/>
                <SearchTabNavigator.Screen name='ListCourseStack' component={ListCourseStack} options={{title: 'COURSES'}}/>
                <SearchTabNavigator.Screen name='ListPath' component={ListPath} options={{title: 'PATHS'}}/>
                <SearchTabNavigator.Screen name='ListAuthor' component={ListAuthor} options={{title: 'AUTHORS'}}/>
            </SearchTabNavigator.Navigator>
        </>
    );
};

export default SearchTab;
