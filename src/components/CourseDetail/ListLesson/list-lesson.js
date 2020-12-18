import React, {useContext} from 'react';
import {SectionList, Text, StyleSheet, View, Image} from 'react-native';
import {lesson} from "../../../globals/mockData";
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import {myLightWhite, mySilver, myWhite} from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";

const ListLesson = ({navigation, route}) => {
    const data = route.params.section.map((section) => {
        return {
            title: section.name,
            data: section.lesson
        }
    })
    console.log(data);
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            margin: 20,
            flex: 1
        },
        sectionContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10
        },
        sectionTitle: {
            color: theme.colors.text,
            fontSize: 18,
        },
        sectionTime: {
            color: theme.colors.subtext,
            fontSize: 12
        },
        image: {
            height: 40,
            width: 60
        },
        separator: {
            height: 1,
            backgroundColor: theme.colors.border,
            marginBottom: 5,
            marginTop: 5
        }
    })
    const renderSectionTitle = (title) => {
        return (
            <View style={styles.sectionContainer}>
                <Image
                    source={{uri: route.params.image}}
                    style={styles.image}
                />
                <View style={{marginLeft: 15}}>
                    <Text style={styles.sectionTitle}>{title}</Text>
                    {/*<Text style={styles.sectionTime}>{title.hours}</Text>*/}
                </View>
            </View>
        )
    }
    return (
        <SectionList
            style={styles.container}
            sections={data}
            renderItem={({item, index}) => <ListLessonItem item={item} key={index}/>}
            renderSectionHeader={({section: {title}}) => renderSectionTitle(title)}
            renderSectionFooter={() => (<View style={styles.separator}/>)}
        />
    );
};



export default ListLesson;
