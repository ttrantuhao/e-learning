import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListCourseItem from "../ListCourseItem/list-course-item";
import {mySilver} from "../../../globals/styles";
import {screenKey} from "../../../globals/constants";
import {ThemeContext} from "../../../provider/theme-provider";

const ListCourse = ({navigation, header, courses}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        header: {
            color: mySilver,
            padding: 10,
            fontSize: 13,
            marginBottom: 5
        },
        container: {
        },
        separator: {
            height: 1,
            backgroundColor: theme.colors.border,
            margin: 5
        }
    })

    const renderSeparator = () => (<View style={styles.separator}/>);
    const onPressListCourseItem = (item) => {
        navigation.navigate(screenKey.CourseDetailScreen, {item})
    }
    return (
            <FlatList
                style={styles.container}
                data={courses}
                renderItem={({item}) => (
                    <ListCourseItem item={item}
                                    navigation={navigation}
                                    onPress={() => onPressListCourseItem(item)}
                    />
                    )}
                ListHeaderComponent={() => (
                    header ? header() : <></>
                    )}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={((item, index) => index.toString())}
            />
    );
};


export default ListCourse;
