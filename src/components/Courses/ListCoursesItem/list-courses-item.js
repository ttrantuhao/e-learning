import React from 'react';
import {Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListCoursesItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                Alert.alert('Info', 'course list item is press',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => {
                                console.log('press cancel')
                            }
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                Share.share({
                                    message: 'React native with hook'
                                })
                            }
                        }
                    ])
            }}
        >
            <Image
                source={require('../../../../assets/ic_course.png')}
                style={styles.image}
            />
            <View style={{margin: 5}}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{props.item.author}</Text>
                <Text
                    style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        //dont define border this way
        // borderBottomColor: 'gray',
        // borderWidth: 1,
        flexDirection: 'row',
        margin: 5
    },
    image: {
        height: 50,
        width: 100
    },
    darkText: {
        color: 'darkgray'
    }
})

export default ListCoursesItem;