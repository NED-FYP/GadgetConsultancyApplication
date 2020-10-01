import React, { Component } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image} from 'react-native';
import KeyboardShift from "../components/keyboardShift.js";
import {styler} from '../../assets/style'

export default class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      user_name:'',
      emailaddress: '',
      password: '',
      confirmpassword:'',
    };
  }

  

  render(){
    return(
      <KeyboardShift>
      {() => (
        <View style={styles.container}>
            
        <View style={styler.logoView}>
            <Image source={require('../images/splashScreenLogo.png')}/> 
        </View> 
        
        <View style={styler.textInputView}>

            < TextInput style={styler.inputBox}
                //underlineColorAndroid='#007c91'
                placeholder="Username" 
                onChangeText = { (username) => this.setState({username}) }
                placeholderTextColor="#aeaeae"
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
            />
            < TextInput style={styler.inputBox}
                //underlineColorAndroid='#007c91'
                placeholder="Email address" 
                onChangeText = { (emailaddress) => this.setState({emailaddress}) }
                placeholderTextColor="#aeaeae"
                ref={(input) => { this.secondTextInput = input; }}
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.thirdTextInput.focus(); }}
            />
            < TextInput style={styler.inputBox}
                //underlineColorAndroid='#007c91'
                placeholder="Password" 
                onChangeText = { (password) => this.setState({password}) }
                secureTextEntry={true}
                placeholderTextColor="#aeaeae"
                ref={(input) => { this.thirdTextInput = input; }}
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.fourthTextInput.focus(); }}
            />
            < TextInput style={styler.inputBox}
                //underlineColorAndroid='#007c91'
                placeholder="Confirm password" 
                onChangeText = { (confirmpassword) => this.setState({confirmpassword}) }
                secureTextEntry={true}
                placeholderTextColor="#aeaeae"
                ref={(input) => { this.fourthTextInput = input; }}
                returnKeyType = { "done" }
                //onSubmitEditing={this.handleTitleInputSubmit}
            />
        </View>

        <View style={styler.buttonView}>
        <TouchableOpacity style={styler.button}
                    onPress={this.signup}>
            <Text style={styler.text}> Signup </Text>
        </TouchableOpacity>
        </View>

        <View style={styler.signupTextView} >
        <Text style={styler.signupText}>Already have an acoount? </Text>
          <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('login')}>
                <Text style={styler.linkButton}> Sign in </Text>
          </TouchableOpacity>
        </View>

        </View>
      )}
      </KeyboardShift> 
    );
  }
  
  signup = () =>{
    
    
      
    
      fetch('http://192.168.1.102:5000/api/signup', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_name: this.state.username,
                email_address: this.state.emailaddress,
                password: this.state.password,
              }),
      })
      .then((response) => response.json())
      .then((res) => {
       
       
          alert(res.message);
                     })
      .done();
    }

}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  },*/
})
