import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Icon} from "react-native-elements";
import SearchTab from "../../MainTab/SearchTab/SearchTab";
import MyActivityIndicator from "../../../Common/my-activity-indicator";
import {ThemeContext} from "../../../../provider/theme-provider";

const SearchResult = ({courses, authors, isLoading}) => {
    const {theme} = useContext(ThemeContext);
    return (
        isLoading ?
            <MyActivityIndicator style={{flex: 1}}/>
            :
            <>
                {(courses.length === 0 && authors.length === 0) ?
                    <View style={{alignItems: "center"}}>
                        <Icon name='search1' type='antdesign' color={theme.colors.text} size={100}
                              style={{marginVertical: 40}}/>
                        <Text style={{color: theme.colors.text, fontSize: 16, textAlign: "center"}}>Sorry, we couldn't
                            find
                            any
                            matches results!</Text>
                    </View>
                    :
                    <SearchTab courses={courses} authors={authors}/>
                }
            </>
    );
};

export default SearchResult;
