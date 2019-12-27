import React, { Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';
 //import NavigationDrawerStructure from "../components/navigationDrawer.js";
 import Questions from "../components/questions.js";
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
           
                  <View style={styles.recentlyViewedTextCont} >
                     <Text style={styles.text} >Recently Viewed</Text>
                  </View>
                  <View style={styles.readMoreTextCont} >
                     <Text style={styles.readMoretext} >Read more</Text>
                  </View>
            <Questions/>

            
           
            <View style={{ marginTop:hp('35%')}}>
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
      //alignItems: 'center',
      //justifyContent: 'center',

    },
    recentlyViewedTextCont:{
      
    },
    text:{
      color:'#000',
      fontSize: 20,
      fontWeight: '500'
    },
    readMoreTextCont:{
      position : "relative",
      left: wp('70%') , 
      top: hp('-3.7%'),
    },
    readMoretext:{
      color:'#007c91',
      fontSize: 20,
      fontWeight: '200',
      textDecorationLine:'underline'

    }
});
