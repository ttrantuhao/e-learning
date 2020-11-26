import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Share} from 'react-native';
import {Icon, Rating} from "react-native-elements";
import {lessonDescription} from "../../../globals/mockData";
import {ThemeContext} from "../../../provider/theme-provider";

const DescriptionLesson = ({item, toggleFavorite, isFavorite, onShare}) => {
    const {theme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: theme.colors.card,
            justifyContent: 'flex-start'
        },
        title: {
            color: theme.colors.text,
            fontSize: 23
        },
        author: {
            flexDirection: 'row',
        },
        price: {
            alignSelf: 'flex-end',
            color: 'red',
            fontSize: 20
        }
    })

    const renderButton = (title, name, type, color, onPress) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={name} type={type} color={color ? color : theme.colors.text} size={23}/>
                <Text style={{color: theme.colors.text, fontSize: 13}}>{title}</Text>
            </TouchableOpacity>
        )
    }



    return (
        <View style={styles.container}>
            {/*<Text style={styles.price}>Free</Text>*/}
            <Text style={styles.title}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Rating
                    readonly={true}
                    startingValue={item.rating}
                    imageSize={18}
                    ratingBackgroundColor={theme.colors.subtext}
                    tintColor={theme.colors.card}
                    type={'custom'}
                />
                <Text style={{fontSize: 13, color: theme.colors.subtext, marginHorizontal: 5}}>(200)</Text>
            </View>


            {/*<View style={styles.author}>*/}
            {/*    <SmallButton title={'Jim Cooper'}/>*/}
            {/*    <SmallButton title={'Joe Eames'}/>*/}
            {/*</View>*/}
            <Text style={{fontSize: 12, color: theme.colors.subtext, marginTop: 5}}>
                {`${item.level} . ${item.released} . ${item.duration}`}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                {isFavorite ?
                    renderButton('Favorite', 'heart', 'antdesign', "#B22222", (() => toggleFavorite(item))) :
                    renderButton('Favorite', 'hearto', 'antdesign', theme.colors.text, (() => toggleFavorite(item)))
                }
                {renderButton('Download', 'file-download', 'material')}
                {renderButton('Share', 'share', 'entypo', theme.colors.text, (() => onShare(item)))}
                {/*{renderButton('Bookmarked', 'bookmark', 'ionicons')}*/}
                {/*{renderButton('Add to channel', 'broadcast-tower', 'font-awesome-5')}*/}
            </View>
            <Text style={{
                color: theme.colors.text,
                textAlign: 'justify',
                marginTop: 20,
                fontSize: 14
            }}>{item.description}</Text>
        </View>
    );
};

export default DescriptionLesson;
