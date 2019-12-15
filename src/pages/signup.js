import React, { Component } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import Logo from "../components/logo.js";
import Form from "../components/form.js";
//import { Actions } from 'react-native-router-flux';


export default class Signup extends Component{
  
  render(){
    
        return(
            <View style={styles.container}>
              <Logo/>
              < TextInput style={styles.inputBox}
                underlineColorAndroid='#007c91'
                placeholder="Username" 
                placeholderTextColor="#ffffff"
               />
              <Form type= "Signup"/>
              < TextInput style={styles.confirmPasswordinputBox}
                underlineColorAndroid='#007c91'
                placeholder="Confirm Password" 
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                />
              <View style={styles.signupTextCont} >
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity
                                onPress={() =>
                                this.props.navigation.navigate('login')
              }>
              <Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
      paddingVertical: 16,

      width: wp('82%'),
      height: hp('5%'),
    },
    signupText:{
      color: "#ffffff",
      fontSize:16
    },
    signupButton:{
      color:'#ffffff',
      fontSize: 16,
      fontWeight: '500'
    },
    inputBox:{
      //width:300,
      backgroundColor: '#007c91',
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10,

      width: wp('82%'),
      height: hp('5%'),
  },
  confirmPasswordinputBox:{
      //width:300,
      backgroundColor: '#007c91',
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10,
      
      position : "relative",
      top: -145 ,

      width: wp('82%'),
      height: hp('5%'),

  }
});
  