import React, { Component } from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;

export default class Questions extends Component {

    render() {
        return (
          <View style={styles.container}>
             
             <View style={styles.rectangle} >
                <View style={styles.separator}/>
                  <View style={styles.questionTitleCont} >

                     <Text style={styles.questionTitleText} >
                             Question Title
                     </Text>
                  </View>
             </View>

          </View>
        
          );
        }
    }

const styles = StyleSheet.create({
    
    container: {
     flex: 1,
     backgroundColor: '#bdbdbd',
    },

     rectangle:{
       marginTop: 20,
        width: wp('100%'),
        height: hp('10%'),
        borderWidth: wp('0.5%'),
        borderColor: '#007c91',
        backgroundColor: '#00acc1',
     },
     separator:{
        height: hp('9.5%'),
        width: wp('0.7%'),
        backgroundColor: "#007c91",
        position : "relative",
        right: wp('-20%') , 
     },
     questionTitleCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-9%'),
     },
     questionTitleText:{
      color: "#fff",
      fontSize:16, 
      fontWeight:'bold'

     }
    
});
     