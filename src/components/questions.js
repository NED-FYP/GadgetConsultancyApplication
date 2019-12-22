import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;

export default class Questions extends Component {

    render() {
        return (
          <View style={styles.container}>
             
             <View style={styles.Rectangle} >
                <View style={styles.Separator}/>
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

     Rectangle:{
       marginTop: 20,
        width: wp(120),
        height: hp(13),
        borderWidth: wp(0.2),
        borderColor: 'grey',
        backgroundColor: '#a0a0a0',
     },
     Separator:{
        height: hp(13),
        width: wp(0.3),
        backgroundColor: "grey",
        position : "relative",
        right: wp('-20%') , 
     }
    
});
     