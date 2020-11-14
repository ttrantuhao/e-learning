import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListPath from "../components/Main/Search/ListPath/list-path";
import ListAuthor from "../components/Main/Search/ListAuthor/list-author";
import ListAllStack from "./ListAllStack";
import {SearchBar} from "react-native-elements";
import {mySilver, myWhite, navColor} from "../globals/styles";
import ListCourse from "../components/Main/Search/ListCourse/list-course";
import ListCourseStack from "./ListCourseStack";

const Tab = createMaterialTopTabNavigator();


const SearchTab = () => {
    const [value, setValue] = useState('');
    const [isHideSearchBar, setIsHideSearchBar] = useState(false);

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

            <Tab.Navigator
                tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
            >
                <Tab.Screen name='ListAll' component={ListAllStack} options={{title: 'ALL'}}/>
                <Tab.Screen name='ListCourse' component={ListCourseStack} options={{title: 'COURSES'}}/>
                <Tab.Screen name='ListPath' component={ListPath} options={{title: 'PATHS'}}/>
                <Tab.Screen name='ListAuthor' component={ListAuthor} options={{title: 'AUTHORS'}}/>
            </Tab.Navigator>
        </>
    );
};

export default SearchTab;
