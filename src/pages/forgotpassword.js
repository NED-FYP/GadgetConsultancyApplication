import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;



export default class ForgotPassword extends Component{
 
    render(){
      
      
          return(
            <View style={styles.container}>
            
            <view style={styles.Lockcontainer}>
             <Image style={{width: 90, height: 100, justifyContent: "flex-start" }}
               source={require('../images/lock.png')}/>
               </view>

               <View style={styles.TroubleloggingTextCont} >
                  <Text style={styles.TroubleloggingText}>Trouble with logging in ?
                  </Text>
              </View>  
              <View style={styles.RecoveryEmailTextCont} >
                  <Text style={styles.RecoveryEmailText}>Enter your email address to get back into your 
                  </Text>
                  <Text style={{color:"#c30000" }}>account
                  </Text>
              </View>  
              < TextInput style={styles.inputBox}
                underlineColorAndroid='#a0a0a0'
                placeholder="Email address" 
                placeholderTextColor="#ffffff"
              />
              <TouchableOpacity style={styles.button} > 
                <Text style={styles.buttonText}>Send Recovery Email
                </Text>
               </TouchableOpacity>

                <View style={styles.BackToLoginButtonCont} >
                 <TouchableOpacity style={styles.BackToLoginButton}
                                onPress={() =>
                                this.props.navigation.navigate('login')
                 }>
                 <Text style={styles.buttonText}>Back To Login 
                </Text>
                 </TouchableOpacity>
                 </View>

   
            </View>
          );
    }}

    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#bdbdbd',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',

        },
        TroubleloggingTextCont:{
          width: wp('82%'),
          height: hp('5%'),
        },

        TroubleloggingText :{
        color:'#000000' , 
        fontSize: 25, 
        fontWeight: '600'
    },
    RecoveryEmailTextCont :{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 24,
      textAlign: 'justify',
      width: wp('82%'),
      height: hp('5%'),
        
    },
    RecoveryEmailText:{
        color:'#c30000' , 
        fontSize: 15
    },
    inputBox:{
        //width:300,
        backgroundColor: '#a0a0a0',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,

        width: wp('82%'),
        height: hp('5%'),
        //textAlign: 'center'
        
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
      },
    button:{
        width:200,
        backgroundColor: '#a0a0a0',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical : 20,
      },
      BackToLoginButton:{
        width:300,
        backgroundColor: '#007c91',
        borderRadius: 10,
        marginVertical: 80,
        paddingVertical : 13,
        //alignItems: 'flex-end',
      },
     /** */ BackToLoginButtonCont:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',

        width: wp('82%'),
        height: hp('5%'),
        //marginVertical: -10,
         
      },

      Lockcontainer:{
        width: wp('82%'),
        height: hp('5%'),
      }

      });
      
