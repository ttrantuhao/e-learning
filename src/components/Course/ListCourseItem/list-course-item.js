import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from "react-native-elements";
import {ThemeContext} from "../../../provider/theme-provider";

const ListCourseItem = ({item, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        item: {
            flexDirection: 'row',
            margin: 10,
            minHeight: 60,
            alignItems: 'center'
        },
        image: {
            height: 90,
            width: 100
        },
        courseInfo: {
            marginLeft: 10,
            flex: 1
        },
        title: {
            color: theme.colors.text,
            fontSize: 16
        },
        content: {
            color: theme.colors.subtext,
            fontSize: 12
        },
        icon: {
        }
    })

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image
                source={{uri: item.imageUrl || item.courseImage}}
                style={styles.image}
            />
            <View style={styles.courseInfo}>
                <Text style={styles.title}>{item.title || item.courseTitle}</Text>
                <Text style={styles.content}>{item["instructor.user.name"] || item.instructorName || item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Rating
                        readonly
                        startingValue={item.ratedNumber || item.courseAveragePoint}
                        imageSize={15}
                        ratingBackgroundColor={theme.colors.subtext}
                        tintColor={theme.colors.background}
                        type={'custom'}
                    />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, color: theme.colors.text, fontWeight: "bold", marginRight: 3}}>
                            {item.soldNumber || item.courseSoldNumber}
                        </Text>
                        <Text style={{fontSize: 13, color: theme.colors.subtext}}>students</Text>
                    </View>
                </View>
                <Text style={{fontSize: 14, color: 'red'}}>{item.price ? item.price + " vnd": "free"}</Text>
            </View>
            {/*<Icon name='more-vertical' type='feather' style={styles.icon} color={theme.colors.text}/>*/}
        </TouchableOpacity>
    );
};



export default ListCourseItem;

