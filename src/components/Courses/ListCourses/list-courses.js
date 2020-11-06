import React from 'react';
import {Button, FlatList, SectionList, Text, TextInput, View} from 'react-native';
import ListCoursesItem from "../ListCoursesItem/list-courses-item";

const ListCourses = () => {
    const courses = [
        {
            title: 'Mobile',
            data: [
                {
                    id: 1,
                    title: "React Native",
                    author: "Hao Tran",
                    level: "Advance",
                    released: "Oct 21th, 2020",
                    duration: "20 hours"
                },
                {
                    id: 2,
                    title: "IOS Development",
                    author: "Hao Tran",
                    level: "Beginner",
                    released: "Oct 26th, 2020",
                    duration: "25 hours"
                },
                {
                    id: 3,
                    title: "Android Development",
                    author: "Hao Tran",
                    level: "Beginner",
                    released: "Oct 26th, 2020",
                    duration: "25 hours"
                }
            ]
        },
        {
            title: 'Web',
            data: [
                {
                    id: 1,
                    title: "React",
                    author: "Hao Tran",
                    level: "Advance",
                    released: "Oct 21th, 2020",
                    duration: "20 hours"
                },
                {
                    id: 2,
                    title: "ASP.NET",
                    author: "Hao Tran",
                    level: "Beginner",
                    released: "Oct 26th, 2020",
                    duration: "25 hours"
                },
                {
                    id: 3,
                    title: "Java",
                    author: "Hao Tran",
                    level: "Beginner",
                    released: "Oct 26th, 2020",
                    duration: "25 hours"
                }
            ]
        }
    ];

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
                sections={courses}
                renderItem={({item}) => <ListCoursesItem item={item}/>}
                renderSectionHeader={({section: {title}}) => <View style={{backgroundColor: 'white'}}><Text>{title}</Text></View>}
            />
        </View>
    );
};

export default ListCourses;