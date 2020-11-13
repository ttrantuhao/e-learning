import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListAll from "../components/Main/Search/ListAll/list-all";
import ListPath from "../components/Main/Search/ListPath/list-path";
import ListAuthor from "../components/Main/Search/ListAuthor/list-author";
import ListCourse from "../components/Course/ListCourse/list-course";
import ListAllStack from "./ListAllStack";
import {Platform} from "react-native";
import {Icon, SearchBar} from "react-native-elements";
import {cardColor, mySilver, myWhite, navColor} from "../globals/styles";

const Tab = createMaterialTopTabNavigator();


const SearchTab = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(text) => setValue(text)}
                value={value}
                cancelIcon={null}
                // clearIcon={<Icon name='search' type='fontawesome' color={mySilver}/>}
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
                // platform={Platform.OS === 'ios' ? 'ios' : 'android'}
                placeholderTextColor={mySilver}
                placeholder='Search...'
            />
            <Tab.Navigator
                tabBarOptions={{labelStyle: {fontWeight: 'bold', margin: 0, padding: 0}}}
            >
                <Tab.Screen name='ListAll' component={ListAll} options={{title: 'ALL'}}/>
                <Tab.Screen name='ListCourse' component={ListCourse} options={{title: 'COURSES'}}/>
                <Tab.Screen name='ListPath' component={ListPath} options={{title: 'PATHS'}}/>
                <Tab.Screen name='ListAuthor' component={ListAuthor} options={{title: 'AUTHORS'}}/>
            </Tab.Navigator>
        </>
    );
};

export default SearchTab;
