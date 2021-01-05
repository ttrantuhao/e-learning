import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from "react-native-elements";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import {screenKey} from "../../globals/constants";
import {ThemeContext} from "../../provider/theme-provider";
import {apiGetCategory} from "../../core/services/course-service";
import {apiSearchByCategory} from "../../core/services/search-service";

const LeftHeader = ({navigation}) => {
    const {theme} = useContext(ThemeContext);
    const [category, setCategory] = useState([]);
    const styles = StyleSheet.create({
        leftHeader: {
            flexDirection: 'row',
            alignItems: 'center'
        },
    })

    useEffect(() => {
        apiGetCategory().then(res => {
            setCategory(res.data.payload);
        }).catch(err => {
            console.log('category err: ', err.response.data);
        })
    }, [])

    const onSelectCategory = (item) => {
        apiSearchByCategory(item.id).then(res => {
            navigation.navigate(screenKey.ListCourse, {courses: res.data.payload.courses.data, title: item.name})
        })
    }

    return (
        <View style={styles.leftHeader}>
            <Menu>
                <MenuTrigger>
                    <Icon name='menu' type='material-community' color={theme.colors.text}
                          iconStyle={{marginLeft: 15}}/>
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsWrapper: {
                        backgroundColor: theme.colors.card,
                    },
                    optionText: {
                        color: theme.colors.text,
                        fontSize: 16,
                        margin: 5
                    }
                }}>
                    {
                        category.map((item) => (
                            <MenuOption
                                text={item.name}
                                onSelect={() => onSelectCategory(item)}
                            />
                        ))
                    }
                </MenuOptions>
            </Menu>
        </View>

    );
};


export default LeftHeader;
