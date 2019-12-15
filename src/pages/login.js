import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import Logo from "../components/logo.js";
import Form from "../components/form.js";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;


export default class Login extends Component{
 
  render(){
    
    
        return(
            <View style={styles.container}>
              <Logo/>
              <Form type= "Login"/>
              <View style={styles.forgotPasswordCont} >
                 <TouchableOpacity 
                                onPress={() =>
                                this.props.navigation.navigate('forgotPassword')
              }>
              
              <Text style={styles.forgotPasswordButton}>Forgot Password?
              </Text> 
                 </TouchableOpacity>
              </View>

              <View style={styles.LoginWithSocialAccountTextCont} >
              <Text style={styles.LoginWithSocialAccountText}>Login With Social Account
              </Text>
              </View>  

              <View style={styles.fbIconCont} >
              <Image 
              source={require('../images/fb_icon.png')}/>

              </View>

              <View style={styles.gmailIconCont} >
              <Image 
              source={require('../images/gmail_icon.png')}/>

              </View>


              <View style={styles.signupTextCont} >
              <Text style={styles.signupText}>Dont have an acoount?
              </Text>
                 <TouchableOpacity 
                                onPress={() =>
                                this.props.navigation.navigate('signup')
              }>
              <Text style={styles.signupButton}> Sign up
              </Text>
                </TouchableOpacity>
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
      width: wp('70%'),
      height: hp('10%'),

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
    forgotPasswordCont:{
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      alignSelf :"flex-end" , 
      flexDirection: 'row-reverse',
      position : "relative",
      top: hp('-9%') ,  
      //width: wp('70%'),
      //height: hp('10%'),

    },
   forgotPasswordButton:{
      color:'#ffffff',
      fontSize: 16,
      fontWeight: '400', 
      textDecorationLine: 'underline',   
},
   LoginWithSocialAccountTextCont:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: 16 ,
      position : "relative",
      top: hp('3%') ,  
      
                  
  },

  LoginWithSocialAccountText:{
      color: "#ffffff",
      fontSize:16,
      fontWeight: '500',
    },
  fbIconCont : {
    flexGrow: 1,
     position : "relative",
      left: wp('-10%') ,
      bottom: hp('-2%'),

    
},
gmailIconCont : {
  flexGrow: 1,
  position : "relative",
  right: wp('-10%') ,
  bottom: hp('8%'),

}

  });
  