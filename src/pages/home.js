import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';
 //import NavigationDrawerStructure from "../components/navigationDrawer.js";


 export default class Home extends Component{
 
    render(){
        return(
            <View style={styles.container}> 
            
            <Header
            backgroundColor='#007c91'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{    text: 'GADGET CONSULTANCY', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' }}
            />
  
            </View>
        )
}}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bdbdbd',
      flexGrow: 1,
      //alignItems: 'center',
      //justifyContent: 'center',

    },
    

});
