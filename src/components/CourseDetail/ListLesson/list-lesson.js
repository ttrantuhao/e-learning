import React from 'react';
import {SectionList, Text, StyleSheet, View, Image} from 'react-native';
import {lesson} from "../../../globals/mockData";
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import {myLightWhite, mySilver, myWhite} from "../../../globals/styles";

const ListLesson = () => {
    const renderSectionTitle = (title) => {
        return (
            <View style={styles.sectionContainer}>
                <Image
                    source={require('../../../../assets/ic_course.png')}
                    style={styles.image}
                />
                <View style={{marginLeft: 15}}>
                    <Text style={styles.sectionTitle}>{title}</Text>
                    <Text style={styles.sectionTime}>2:04</Text>
                </View>
            </View>
        )
    }
    return (
        <SectionList
            style={styles.container}
            sections={lesson}
            renderItem={({item, index}) => <ListLessonItem item={item} key={index}/>}
            renderSectionHeader={({section: {title}}) => renderSectionTitle(title)}
            renderSectionFooter={() => (<View style={styles.separator}/>)}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    sectionTitle: {
        color: myWhite,
        fontSize: 18,
    },
    sectionTime: {
        color: mySilver,
        fontSize: 12
    },
    image: {
        height: 40,
        width: 60
    },
    separator: {
        height: 0.5,
        backgroundColor: mySilver,
        marginBottom: 5,
        marginTop: 5
    }
})

export default ListLesson;
