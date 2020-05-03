import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image ,TextInput } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import {styler} from '../../assets/style'


export default class Login extends Component{
  render(){
    return(
        <View style={styles.container}>

            <View style={styler.logoView}>
              <Image source={require('../images/splashScreenLogo.png')}/> 
            </View> 
              
            <View style={styler.textInputView}>
                < TextInput style={styler.inputBox}
                  //underlineColorAndroid='#007c91'
                  placeholder="Email address" 
                  placeholderTextColor="#aeaeae"
                  returnKeyType = { "next" }
                  onSubmitEditing={() => { this.secondTextInput.focus(); }}
              />

              < TextInput style={styler.inputBox}
                  //underlineColorAndroid='#007c91'
                  placeholder="Password" 
                  secureTextEntry={true}
                  placeholderTextColor="#aeaeae"
                  ref={(input) => { this.secondTextInput = input; }}
                  returnKeyType = { "done" }
              />
            </View>

            <View style={styles.forgotPasswordView} >
                <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('forgotPassword')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password? </Text> 
                </TouchableOpacity>
            </View>

            <View style={styler.buttonView}>
            <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('home')}>
                <Text style={styler.text}> Login </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.orView} >
             <View style={styles.leftLine} /> 
             <View style={styles.rightLine} /> 
                    <Text style={styles.orText}> OR </Text> 
               
            </View>
    
            <View style={styler.buttonView}>
                <TouchableOpacity style={styles.facebookButton}
                            onPress={() => this.props.navigation.navigate('home')}>
                    <Text style={styler.text} >
                        <FontAwesome   name='facebook-square'  size={18}  />
                              Login with Facebook 
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styler.buttonView}>
                <TouchableOpacity style={styles.gmailButton}
                            onPress={() => this.props.navigation.navigate('home')}>
                    <Text style={styler.text}> 
                        <MaterialCommunityIcons   name='gmail'  size={18}  />
                                Login with gmail
                    </Text>
                </TouchableOpacity>
            </View>
            
            <View style={styler.signupTextView} >
            <Text style={styler.signupText}>Don't have an acoount? </Text>
              <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate('signup')}>
                    <Text style={styler.linkButton}> Signup </Text>
              </TouchableOpacity>
            </View>
    
      </View>       
    );    
  }
}
          
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    /**logoView:{ 
      alignItems: 'center',
      justifyContent:'flex-start',
      paddingVertical:30
    },
    textInputView:{
      alignItems: 'center',
    },
    inputBox:{
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:'#aeaeae',
      borderRadius: 20,
      fontSize:16,
      color:'black',
      marginVertical: 10,
      width: wp('82%'),
      height: hp('6%'), 
      paddingHorizontal: 16,   
    },
    buttonView:{
      alignItems: 'center',
    },
    text:{
      fontSize: 18,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center',
    },*/
    button:{
      backgroundColor: '#083b66',
      borderRadius: 20,
      width: wp('82%'),
      height: hp('6%'),
      justifyContent:'center',
      marginVertical: 20,
    },
    forgotPasswordView:{
      alignItems:'flex-end',
      paddingHorizontal:32
    },
    forgotPasswordText:{
      color:'#083b66',
      fontSize: 16,
      fontWeight: '400', 
      textDecorationLine: 'underline',   
    },
    orView:{
      alignItems:'center',
      marginBottom:22
    },
    orText:{
      color:'#aeaeae',
      fontSize: 16,
      fontWeight: '500', 
    },
    leftLine: {
      alignSelf:'flex-start',
      borderBottomColor:'#aeaeae',
      borderBottomWidth:1,
      width: wp('38%'),
      bottom:hp('-1.3%'),
      marginLeft:30,
    },
    rightLine: {
      alignSelf:'flex-end',
      borderBottomColor:'#aeaeae',
      borderBottomWidth:1,
      width: wp('38%'),
      bottom:hp('-1.3%'),
      marginRight:30,
    },
    facebookButton:{
      backgroundColor: '#3b5998',
      borderRadius: 20,
      width: wp('82%'),
      height: hp('6%'),
      justifyContent:'center',
      marginVertical: 10,
    },
    gmailButton:{
      backgroundColor: '#dd4b39',
      borderRadius: 20,
      width: wp('82%'),
      height: hp('6%'),
      justifyContent:'center',
      marginVertical: 10,
    },
    /** 
    signupTextView:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom:12
    },
    signupText:{
      color: "#aeaeae",
      fontSize:16,
    },
    linkButton:{
      color:'#083b66',
      fontSize: 16,
      fontWeight: '400',
    },
    */
   
});
 
  