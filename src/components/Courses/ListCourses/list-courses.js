import React from 'react';
import {Button, FlatList, SectionList, Text, TextInput, View} from 'react-native';
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import {listCourses} from '../../../globals/mockData'

const ListCourses = () => {
    const searchView = () => {
        return (
            <View style={{flexDirection: 'row', margin: 5}}>
                <TextInput
                    placeholder={'Search text'}
                    style={{flex: 1, borderWidth: 1, borderColor: 'gray'}}
                />
                <Button
                    title={'Search'}
                    onPress={() => {
                        console.log('Search')
                    }}
                    style={{width: 60, height: 40}}
                />
            </View>
        )

    }

    return (
        <View>
            {/*<FlatList*/}
            {/*    data={courses}*/}
            {/*    renderItem={({item}) => <ListCoursesItem item={item}/>}*/}
            {/*    ListHeaderComponent={() => searchView()}*/}

            {/*/>*/}
            <SectionList
                sections={listCourses}
                renderItem={({item}) => <ListCoursesItem item={item}/>}
                renderSectionHeader={({section: {title}}) => <View style={{backgroundColor: 'white'}}><Text>{title}</Text></View>}
            />
        </View>
    );
};

export default ListCourses;
