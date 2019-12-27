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
            <ScrollView>  
              {/*Recently viewed**/}
              <View style={styles.recentlyViewedTextCont} >
                <Text style={styles.text} >RECENTLY VIEWED</Text>
              </View>
              <View style={styles.readMoreTextCont} >
                <TouchableOpacity>
                  <Text style={styles.readMoretext} >Read more</Text>
                </TouchableOpacity>
              </View>
                              <Questions/>

              {/*Recent Tags**/}
              <View style={styles.recenttagsTextCont} >
                <Text style={styles.text} >RECENT TAGS</Text>
              </View>
           
            <View  /**style={{ marginTop:hp('0%')}}*/>
              <ScrollView horizontal={true} >
                 <Tag name="Laptop" />
                 <Tag name="Mobile"/>
                 <Tag name="Camera"/>
                 <Tag name="Headphones"/>  
              </ScrollView>
            </View>

            {/*Mostly viewed**/}
            <View style={styles.mostlyViewedTextCont} >
            <Text style={styles.text} >MOSTLY VIEWED</Text>
            </View>
            <View style={styles.readMoreMostlyViewedTextCont} >
                <TouchableOpacity>
                  <Text style={styles.readMoretext} >Read more</Text>
                </TouchableOpacity>
            </View>

             <Questions /> 
    
            
            </ScrollView>                
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
      position : "relative",
      right: wp('-3%') , 
      top: hp('-0.1%'),
    },
    text:{
      color:'#000',
      fontSize: 20,
      fontWeight: 'bold'
    },
    readMoreTextCont:{
      position : "relative",
      left: wp('70%') , 
      top: hp('-3.7%'),
    },
    readMoretext:{
      color:'#007c91',
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine:'underline'

    },

    recenttagsTextCont:{
      position : "relative",
      right: wp('-3%') , 
      bottom: hp('-3%'),
    },

    mostlyViewedTextCont:{
      position : "relative",
      right: wp('-3%') , 
      top: hp('-185%'),
    },
    readMoreMostlyViewedTextCont:{
      position : "relative",
      left: wp('70%') , 
      top: hp('-188.6%'),
    }



    
});
