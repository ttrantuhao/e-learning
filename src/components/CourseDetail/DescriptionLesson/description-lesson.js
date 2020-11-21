import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {cardColor, myLightWhite, mySilver, myWhite, skillBtnColor} from "../../../globals/styles";
import {Icon} from "react-native-elements";
import {lessonDescription} from "../../../globals/mockData";
import SmallButton from "../../Common/small-button";
import {ThemeContext} from "../../../provider/theme-provider";

const DescriptionLesson = ({item}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: theme.colors.card
        },
        title: {
            color: myWhite,
            fontSize: 23
        },
        author: {
            flexDirection: 'row'
        }
    })

    const renderButton = (title, name, type) => {
        return  (
            <TouchableOpacity>
                <Icon name={name} type={type} color={theme.colors.text} size={23} />
                <Text style={{color: theme.colors.text, fontSize: 13}}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Introduction</Text>
            <View style={styles.author}>
                <SmallButton title={'Jim Cooper'}/>
                <SmallButton title={'Joe Eames'}/>
            </View>
            <Text style={{fontSize: 12, color: theme.colors.subtext, marginTop: 5}}>
                {`${item.level} . ${item.released} . ${item.duration}`}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                {renderButton('Bookmarked', 'bookmark', 'ionicons')}
                {renderButton('Add to channel', 'broadcast-tower', 'font-awesome-5')}
                {renderButton('Download', 'file-download', 'material')}
            </View>
            <Text style={{color: theme.colors.text, textAlign: 'justify', marginTop: 20, fontSize: 14}}>{lessonDescription}</Text>
        </View>
    );
};



export default DescriptionLesson;
