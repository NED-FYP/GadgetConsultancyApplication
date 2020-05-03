import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import {styler} from '../../assets/style'

export default class ForgotPassword extends Component{
    render(){
        return(
            <View style={styles.container}>
            
                <View style={styler.logoView}>
                      <Image source={require('../images/splashScreenLogo.png')}/> 
                </View> 
            
                <View style={styler.textInputView}>
                    < TextInput style={styler.inputBox}
                      //underlineColorAndroid='#007c91'
                      placeholder="Enter your email address" 
                      placeholderTextColor="#aeaeae"
                  />
                </View>

                <View style={styler.buttonView}>
                <TouchableOpacity style={styler.button}
                            onPress={() => this.props.navigation.navigate('home')}>
                    <Text style={styler.text}> Submit </Text>
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
  /** 
  logoView:{ 
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
  },
  button:{
    backgroundColor: '#083b66',
    borderRadius: 20,
    width: wp('82%'),
    height: hp('6%'),
    justifyContent:'center',
    marginVertical: 25,
  },
  */
 
});
      
