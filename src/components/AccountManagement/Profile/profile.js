import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {bgColor, mySilver, myWhite} from "../../../globals/styles";
import {Avatar} from "react-native-elements";
import SmallButton from "../../Common/small-button";
import {popularSkills} from "../../../globals/mockData";

const Profile = () => {
    const interests = popularSkills.slice(0, 5);
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.usernameContainer}>
                <Avatar
                    rounded
                    source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                    size='large'
                />
                <Text style={styles.textUsername}>Tran Tu Hao</Text>
            </View>
            <Text style={{color: myWhite, fontSize: 18, marginTop: 50}}>Interests</Text>
            <FlatList
                style={{marginTop: 10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={interests}
                renderItem={({item}) => <SmallButton title={item}/>}
            />
            <Text style={{color: myWhite, fontSize: 18, fontWeight: 'bold', marginTop: 40}}>
                Activity insights (last 30 days)
            </Text>
            <Text style={{color: mySilver, fontSize: 13, marginTop: 40}}>
                TOTAL ACTIVE DAYS
            </Text>
            <View style={{flexDirection: 'row', alignItems: "flex-end"}}>
                <Text style={{color: myWhite, fontSize: 18, fontWeight: 'bold'}}>
                    1
                </Text>
                <Text style={{color: mySilver, fontSize: 13, marginLeft: 20}}>
                    1 day streak
                </Text>
            </View>
            <Text style={{color: mySilver, fontSize: 13, marginTop: 40}}>
                MOST ACTIVE TIME OF DAY
            </Text>
            <Text style={{color: myWhite, fontSize: 18}}>
                10:00 PM
            </Text>
            <Text style={{color: mySilver, fontSize: 13, marginTop: 40}}>
                MOST VIEWED SUBJECT
            </Text>
            <Text style={{color: myWhite, fontSize: 18}}>
                N/A
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        padding: 20,
        backgroundColor: bgColor,
        flex: 1
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textUsername: {
        color: myWhite,
        fontSize: 25,
        // fontWeight: 'bold',
        marginLeft: 20
    },

})

export default Profile;
