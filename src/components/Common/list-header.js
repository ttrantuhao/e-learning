import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";
import {ThemeContext} from "../../provider/theme-provider";


const ListHeader = ({title, rightTitle, onPress}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create ({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 5,
            paddingBottom: 5
        },
        title: {
            fontSize: 16,
            color: theme.colors.text,
            margin: 5,
        },
        seeAll: {
            flexDirection: "row",
            alignItems: "center"
        },
        seeAllText: {
            color: theme.colors.subtext,
            fontSize: 13
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.seeAll} onPress={onPress}>
                <Text style={styles.seeAllText}>{rightTitle}</Text>
                <Icon name={'chevron-small-right'} type={'entypo'} color={theme.colors.subtext} size={20}/>
            </TouchableOpacity>
        </View>
    );
};



export default ListHeader;
