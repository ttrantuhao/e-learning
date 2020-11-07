import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/components/Authentication/Login/login";
import Home from "./src/components/Main/Home/home";
import {themeColor} from "./src/globals/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeColor}/>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24,
  },
});
