import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';
 //import NavigationDrawerStructure from "../components/navigationDrawer.js";

 //import Tag from "./src/components/tag.js";
 import Tag from "../components/tag.js";

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



            
            <View >
              <ScrollView horizontal={true} >
                 <Tag name="Laptop" />
                 <Tag name="Mobile"/>
                 <Tag name="Camera"/>
                 <Tag name="Headphones"/>  
              </ScrollView>
            </View>
  
            </View>
        )
}}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bdbdbd',
      flexGrow: 1,
    },
    
});
