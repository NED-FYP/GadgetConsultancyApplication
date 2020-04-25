//import React from 'react';
import React, { Component } from 'react'; 
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;

export default class Form extends Component{
  render(){
    return(
      <View style={styles.container}>
        < TextInput style={styles.inputBox}
              underlineColorAndroid='#007c91'
              placeholder="Email address" 
              placeholderTextColor="#ffffff"
          />

          < TextInput style={styles.inputBox}
              underlineColorAndroid='#007c91'
              placeholder="Password" 
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
          />
      </View>
    );
  }
} 
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position : "relative",
      top: hp('10%') ,
    },
    inputBox:{
        backgroundColor: '#007c91',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,
        width: wp('82%'),
        height: hp('5%'),    
    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
    },
    button:{
      backgroundColor: '#007c91',
      borderRadius: 10,
      marginVertical: 40,
      paddingVertical : 13,
      width: wp('40%'),
    }
});
  