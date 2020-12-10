import React, {useContext, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from "react-native-elements";
import SmallButton from "../../Common/small-button";
import {popularSkills} from "../../../globals/mockData";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {ThemeContext} from "../../../provider/theme-provider";
import ProfileItem from "./ProfileItem/profile-item";
import PrimaryButton from "../../Common/primary-button";
import CustomAlert from "../../Common/custom-alert";

const Profile = () => {
    const interests = popularSkills.slice(0, 5);
    const authContext = useContext(AuthenticationContext);
    const [username, setUsername] = useState(authContext.state.userInfo.name || '');
    const [phone, setPhone] = useState(authContext.state.userInfo.phone);
    const [visible, setVisible] = useState(false);
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            padding: 10,
            flex: 1
        },
        card: {
            backgroundColor: theme.colors.card,
            padding: 10,
            borderRadius: 5,
            elevation: 1,
            marginVertical: 10
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
    })

    const onSaveProfile = () => {
        // setAuthUser({...authUser, name: username, phone: phone});
        // setVisible(true);
        // Alert.alert('Update successfully!','Your information have been updated.', [{text: 'Ok'}]);
    }

    const onUserChange = (text) => {
        setUsername(text);
    }

    const onPhoneChange = (text) => {
        setPhone(text);
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{...styles.card, flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                    rounded
                    source={{uri: 'https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg'}}
                    size='large'
                >
                    <Avatar.Accessory size={23}/>
                </Avatar>
                <View style={{marginLeft: 20}}>
                    <Text style={{color: theme.colors.text, fontSize: 25}}>
                        {authContext.state.userInfo.name}
                    </Text>
                    <Text style={{color: theme.colors.text, fontSize: 13}}>
                        {authContext.state.userInfo.email}
                    </Text>
                </View>
            </View>

            <View style={{...styles.card}}>
                <Text style={{color: theme.colors.text, fontSize: 18}}>Favorite categories</Text>
                <FlatList
                    style={{marginTop: 10}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={interests}
                    renderItem={({item}) => <SmallButton title={item}/>}
                    keyExtractor={((item, index) => index.toString())}
                />
            </View>

            <View style={styles.card}>
                <Text style={{color: theme.colors.text, fontSize: 18}}>Profile information</Text>
                <ProfileItem title='Username' value={username} iconName='user' iconType='simple-line-icon'
                             onChange={onUserChange}/>
                <ProfileItem title='Phone number' value={phone} iconName='phone' iconType='simple-line-icon'
                             onChange={onPhoneChange}/>
                <ProfileItem title='Email' subtitle='inactivate' value={authContext.state.userInfo.email} iconName='email'
                             iconType='fontisto' editable={false}/>
                <ProfileItem title='Password' value='********' iconName='lock' iconType='simple-line-icon'
                             editable={false}/>
            </View>
            <PrimaryButton title='Save change' style={{marginBottom: 30, borderRadius: 5}} onPress={onSaveProfile}/>
            <CustomAlert title='Update successfully!'
                         message='Your information have been updated.'
                         visible={visible}
                         onOk={() => setVisible(false)}/>
        </ScrollView>

    );
};

export default Profile;


