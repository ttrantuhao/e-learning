import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {navColor} from "./src/globals/styles";
import VerifyPassword from "./src/components/Authentication/VerifyPassword/verify-password";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={navColor} style={'light'}/>
      <VerifyPassword />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:24,
  },
});
