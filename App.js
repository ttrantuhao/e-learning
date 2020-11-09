import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/components/Authentication/Login/login";
import Home from "./src/components/Main/Home/home";
import {myMediumBlue} from "./src/globals/styles";
import Register from "./src/components/Authentication/Register/register";
import VerifyPassword from "./src/components/Authentication/VerifyPassword/verify-password";
import ForgetPassword from "./src/components/Authentication/FogetPassword/forget-password";
import Browse from "./src/components/Main/Browse/browse";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={myMediumBlue}/>
      <Browse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24,
  },
});
