import React from 'react';
import { StyleSheet, Text, View, TextInput  } from 'react-native';


export default function Form() {
    
return(
    <View style={styles.container}>
       < TextInput style={styles.inputBox} underlineColorAndroid='#007c91'/>
    </View>
     );
    

} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width:300,
        backgroundColor: '#007c91'
    }
  });
  