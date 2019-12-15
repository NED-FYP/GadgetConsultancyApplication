import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;


export default function Logo() {
    
return(
    <View style={styles.container}>

    <View style={styles.Imagecontainer}>
    <Image style={{width: 90, height: 150}}
      source={require('../images/logo.png')}/> 
    </View> 

    <View style={styles.Textcontainer}>
    <Text style={{color:'#ffffff' , fontSize: 15}}>GADGET CONSULTANCY</Text>
    </View> 

    </View> );
} 

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    
    },
    Imagecontainer:
  {
    
    position : "relative",
      top: hp('10%') ,
      //width: wp('70%'),
      //height: hp('10%'),


  },
  Textcontainer:{
    
    position : "relative",
      top: hp('10%') ,
    //height: hp('40%'),

  }


});
  
  