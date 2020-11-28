import React, {useContext, useEffect, useState} from 'react';
import {FlatList, TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getComment} from "../../../core/services/course-service";
import {ThemeContext} from "../../../provider/theme-provider";
import ListCommentItem from "../ListCommentItem/list-comment-item";
import {myWhite} from "../../../globals/styles";
import {Rating} from "react-native-elements";
import {AuthenticationContext} from "../../../provider/authentication-provider";

const ListComment = () => {
    const {theme} = useContext(ThemeContext);
    const {authUser} = useContext(AuthenticationContext);
    const [comments, setComments] = useState(null);
    const [rating, setRating] = useState(5);
    const [commentValue, setCommentValue] = useState('');
    const styles = StyleSheet.create({
        containerComment: {
            margin: 10,
        },
        containerInput: {
            color: theme.colors.text,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme.colors.subtext,
            padding: 10,
            backgroundColor: theme.colors.card,
        },
        commentBtn: {
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            height: 35,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            marginVertical: 10,
            width: 100
        },
        text: {
            fontSize: 14,
            fontWeight: 'bold',
            color: myWhite,
            textAlign: 'center',
            padding: 10
        }
    })

    useEffect(() => {
        const getComments = getComment();
        setComments(getComments);
    }, [])

    const onComment = () => {
        if (commentValue !== '') {
            const newComment = {
                id: 6,
                score: rating,
                content: commentValue,
                author: authUser.name
            }
            setComments([newComment, ...comments]);
            setCommentValue('');
        }
    }

    const renderCommentSection = () => {
        return (
            <View style={styles.containerComment}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, color: theme.colors.text, marginRight: 5}}>Rating: </Text>
                    <Rating
                        startingValue={rating}
                        imageSize={22}
                        ratingBackgroundColor={theme.colors.subtext}
                        tintColor={theme.colors.background}
                        type={'custom'}
                        style={{marginVertical: 10, alignSelf: 'flex-start'}}
                        onFinishRating={rating => setRating(rating)}
                    />
                </View>
                <TextInput
                    style={styles.containerInput}
                    placeholder='Comment here...'
                    placeholderTextColor={theme.colors.subtext}
                    onChangeText={text => setCommentValue(text)}
                    value={commentValue}
                />
                <TouchableOpacity style={styles.commentBtn} onPress={onComment}>
                    <Text style={styles.text}>comment</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            data={comments}
            renderItem={({item}) => (<ListCommentItem item={item}/>)}
            ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: theme.colors.border, margin: 5}}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderCommentSection()}
        />
    );
};

export default ListComment;
