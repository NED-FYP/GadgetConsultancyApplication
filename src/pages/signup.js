import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Logo from "../components/logo.js";
import Form from "../components/form.js";


export default function Signup() {
    
    {
        return(
            <View style={styles.container}>
              <Logo/>
              <Form type= "Signup"/>
              <View style={styles.signupTextCont} >
              <Text style={styles.signupText}>Already have an account?</Text>
              <Text style={styles.signupButton}> Sign in</Text>
              </View>
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
    signupTextCont:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: 16
    },
    signupText:{
      color: "#ffffff",
      fontSize:16
    },
    signupButton:{
      color:'#ffffff',
      fontSize: 16,
      fontWeight: '500'
    }
  });
  