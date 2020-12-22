import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Rating} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";
import {myBlue} from "../../../globals/styles";

const DescriptionLesson = ({item, toggleLike, isLike, isOwn, onShare, onRegister}) => {
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>{item.title || item.courseTitle}</Text>
                <Text style={{
                    color: 'red',
                    fontSize: 16,
                    marginLeft: 5
                }}>{item.price ? item.price + " vnd" : "Free"}</Text>
            </View>
            <Text style={{fontSize: 15, color: theme.colors.subtext}}>{item.subtitle}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <Rating
                    readonly={true}
                    startingValue={item.averagePoint}
                    imageSize={20}
                    ratingBackgroundColor={theme.colors.subtext}
                    tintColor={theme.colors.card}
                    type={'custom'}
                />
                <Text style={{
                    fontSize: 15,
                    color: theme.colors.subtext,
                    marginHorizontal: 5
                }}>{` - ${item.soldNumber} students`}</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                {isLike ?
                    renderButton('Unlike', 'like1', 'antdesign', myBlue, toggleLike) :
                    renderButton('Like', 'like1', 'antdesign', theme.colors.text, toggleLike)
                }
                {/*{renderButton('Download', 'file-download', 'material')}*/}
                {
                    isOwn ?
                        renderButton('Joined', 'user-check', 'font-awesome-5', myBlue) :
                        renderButton('Join class', 'user-plus', 'font-awesome-5', theme.colors.text, onRegister)
                }
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
