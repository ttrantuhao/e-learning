import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {cardColor, myBlue, mySilver, myWhite} from "../../../../../globals/styles";
import {ThemeContext} from "../../../../../provider/theme-provider";
import Moment from 'moment';
import {Rating} from "react-native-elements";
const CourseItem = ({item, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        container: {
            margin: 5,
            width: 200,
            height: 210,
            backgroundColor: theme.colors.card,
            elevation: 2
        },
        image: {
            height: 90,
            width: 200,
        },
        title: {
            fontSize: 15,
            color: theme.colors.text,
            fontWeight: 'bold',
            height: 42
        },
        content: {
            fontSize: 13,
            color: theme.colors.subtext,
        }
    })
    // const timeCreate = Moment(item.createdAt).format('d/MM/yyyy')
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{uri: item.imageUrl || item.courseImage}} style={styles.image}/>
            <View style={{margin: 5}}>
                <Text style={styles.title}>{item.title || item.courseTitle}</Text>
                <Text style={styles.content}>{item["instructor.user.name"] || item.instructorName}</Text>
                {/*<Text style={styles.content}>{`${timeCreate} - ${item.totalHours || item.total}h`}</Text>*/}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Rating
                        readonly
                        startingValue={item.rating}
                        imageSize={15}
                        ratingBackgroundColor={theme.colors.subtext}
                        tintColor={theme.colors.card}
                        type={'custom'}
                    />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, color: theme.colors.text, fontWeight: "bold", marginRight: 3}}>
                            {item.soldNumber}
                        </Text>
                        <Text style={{fontSize: 13, color: theme.colors.subtext}}>students</Text>
                    </View>
                </View>
                <Text style={{fontSize: 14, color: 'red'}}>{item.price ? item.price + " vnd": "free"}</Text>
            </View>
        </TouchableOpacity>
    );
};



export default CourseItem;
