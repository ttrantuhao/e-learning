import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {cardColor, myLightWhite, mySilver, myWhite, skillBtnColor} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import {lessonDescription} from "../../../globals/mockData";
import SmallButton from "../../Common/small-button";

const DescriptionLesson = ({item}) => {
    const renderButton = (title, name, type) => {
        return  (
            <TouchableOpacity>
                <Icon name={name} type={type} color={myWhite} size={23} />
                <Text style={{color: myWhite, fontSize: 13}}>{title}</Text>
            </TouchableOpacity>
        )
    }
    const renderAuthor = (name) => {
        return (
            <TouchableOpacity
                style={styles.buttonAuthor}
            >
                <Text style={styles.textAuthor}>
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Introduction</Text>
            <View style={styles.author}>
                <SmallButton title={'Jim Cooper'}/>
                <SmallButton title={'Joe Eames'}/>
                {/*{renderAuthor('Jim Cooper')}*/}
                {/*{renderAuthor('Joe Eames')}*/}
            </View>
            <Text style={{fontSize: 12, color: mySilver, marginTop: 5}}>
                {`${item.level} . ${item.released} . ${item.duration}`}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                {renderButton('Bookmarked', 'bookmark', 'ionicons')}
                {renderButton('Add to channel', 'broadcast-tower', 'font-awesome-5')}
                {renderButton('Download', 'file-download', 'material')}
            </View>
            <Text style={{color: myWhite, textAlign: 'justify', marginTop: 20, fontSize: 14}}>{lessonDescription}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: cardColor
    },
    title: {
        color: myWhite,
        fontSize: 23
    },
    buttonAuthor: {
        backgroundColor: skillBtnColor,
        borderRadius: 40,
        height: 25,
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 5
    },
    textAuthor: {
        fontSize: 12,
        color: myLightWhite,
        textAlign: 'center',
        padding: 12
    },
    author: {
        flexDirection: 'row'
    }
})

export default DescriptionLesson;
