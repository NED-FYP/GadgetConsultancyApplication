//import React from 'react';
import React, { Component } from 'react'; 
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';


//export default function Form() {
  //return(

    export default class Form extends Component{

  render(){
    return(

    <View style={styles.container}>
       < TextInput style={styles.inputBox}
            underlineColorAndroid='#007c91'
            placeholder="Email address" 
            placeholderTextColor="#ffffff"
        />

        < TextInput style={styles.inputBox}
            underlineColorAndroid='#007c91'
            placeholder="Password" 
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
        />

         <TouchableOpacity style={styles.button} > 
            <Text style={styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
         
    </View>
     );
    
  }
} 
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width:300,
        backgroundColor: '#007c91',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
    },
    button:{
      width:300,
      backgroundColor: '#007c91',
      borderRadius: 10,
      marginVertical: 40,
      paddingVertical : 13
    }
  });
  