import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from "./src/pages/login";

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#007c91" barStyle="light-content" />
      <Login/>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00acc1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
