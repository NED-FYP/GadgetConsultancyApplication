import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Logo from "../components/logo.js";
import Form from "../components/form.js";


export default function Login() {
    
    {
        return(
            <View style={styles.container}>
              <Logo/>
              <Form/>
            </View>
        );
        
    }
}
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00acc1',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  