import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;


 export default class Tag extends Component{
    render(){
        return(
            <View style={{marginLeft:wp('5%'), }}>
            <View>
              <TouchableOpacity style={styles.button} > 
                 <Text style={styles.buttonText}>{this.props.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }}

    const styles = StyleSheet.create({
        
        button:{
          backgroundColor: '#007c91',
          borderRadius: 10,
          marginVertical: 40,
          paddingVertical : 14,
          width: wp('29%'),
        },
        buttonText:{
          fontSize: 16,
          fontWeight: '500',
          color: '#ffffff',
          textAlign: 'center'
        },
    
    });
    