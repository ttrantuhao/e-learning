import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Rating} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const DescriptionLesson = ({item, toggleFavorite, isFavorite, onShare, onRegister}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            padding: 15,
            backgroundColor: theme.colors.card,
            justifyContent: 'flex-start'
        },
        title: {
            color: theme.colors.text,
            fontSize: 23,
            flex: 1
        },
        author: {
            flexDirection: 'row',
        },
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
            <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                <Text style={styles.title}>{item.title}</Text>
                {
                    item.isMine ?
                        <Text style={{ color: theme.colors.subtext, fontSize: 16, marginLeft: 5}}>Đã đăng ký</Text> :
                        <TouchableOpacity onPress={() => onRegister(item)}>
                            <Text style={{ color: theme.colors.primary, fontSize: 16}}>Đăng ký</Text>
                        </TouchableOpacity>
                }

            </View>

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
