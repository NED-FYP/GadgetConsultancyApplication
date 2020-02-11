import React, { Component } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import Logo from "../components/logo.js";
import Form from "../components/form.js";
//import { Actions } from 'react-native-router-flux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;



export default class Signup extends Component{
  
  render(){
    
        return(
            <View style={styles.container}>
              <Logo/>

              <View style={styles.inputBoxCont}>
                 < TextInput style={styles.inputBox}
                     underlineColorAndroid='#007c91'
                     placeholder="Username" 
                     placeholderTextColor="#ffffff"
                  />
                 < TextInput style={styles.inputBox}
                     underlineColorAndroid='#007c91'
                     placeholder="Email Address" 
                     placeholderTextColor="#ffffff"
                  />
                 < TextInput style={styles.inputBox}
                     underlineColorAndroid='#007c91'
                     placeholder="Password" 
                     secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                  />
  

                < TextInput style={styles.inputBox}
                     underlineColorAndroid='#007c91'
                     placeholder="Confirm Password" 
                     secureTextEntry={true}
                     placeholderTextColor="#ffffff"
                  />
              </View>         

                <TouchableOpacity style={styles.button}
                  onPress={() =>
                  this.props.navigation.navigate('home')
                    }
                 > 
                   <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
   
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
      width: wp('82%'),
      height: hp('5%'),
      backgroundColor: '#007c91',
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10,
  },
  inputBoxCont:{
    position : "relative",
    top: hp('7%') ,
  },
  
  button:{
    //width:300,
    backgroundColor: '#007c91',
    borderRadius: 10,
    marginVertical: 40,
    paddingVertical : 13,
    width: wp('40%'),
    bottom:  hp('-5%')
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  

});
  