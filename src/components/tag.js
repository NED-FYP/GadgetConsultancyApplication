import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;

 export default class Tag extends Component{
    render(){
        return(
          <View style={styles.container}> 
            <View style={styles.button}>
                 <Text style={styles.buttonText}>{this.props.name}</Text>
            </View>
          </View>
        )
    }
  }

 const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent:'center',
        marginLeft:wp('5%')
      },
      button:{
        backgroundColor: '#007c91',
        borderRadius: 10,
        width: wp('29%'),
        height:hp('6.5%'),
        justifyContent:'center'
      },
      buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
      },
 });
    