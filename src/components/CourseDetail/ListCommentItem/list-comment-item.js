import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Rating} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const ListCommentItem = ({item}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        containerItem: {
            flexDirection: 'row',
            margin: 10,
            alignItems: 'flex-start'
        },
        title: {
            color: theme.colors.text,
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 10
        },
        content: {
            color: theme.colors.text,
            fontSize: 14,
            textAlign: "justify",
        },
        time: {
            color: theme.colors.subtext,
            fontSize: 11,
            marginBottom: 5
        }
    })

    return (
        <View style={styles.containerItem}>
            <Avatar
                rounded
                source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                size='small'
            />
            <View style={{marginLeft: 20, flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title}>{item.author}</Text>
                    <Rating
                        readonly={true}
                        startingValue={item.score}
                        imageSize={14}
                        ratingBackgroundColor={theme.colors.subtext}
                        tintColor={theme.colors.background}
                        type={'custom'}
                    />
                </View>
                <Text style={styles.time}>20-11-2020</Text>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        </View>
    )
};

export default ListCommentItem;
