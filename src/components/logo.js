import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Logo() {
    
return(
    <View style={styles.container}>
    <Image style={{width: 90, height: 150}}
    source={require('../images/logo.png')}/>
    <Text style={{color:'#ffffff' , fontSize: 15}}>GADGET CONSULTANCY</Text>
    
    </View> );
    

} 
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
    justifyContent: 'center',
    },
  });
  