{/** 
import React, { Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';
 import Questions from "../components/questions.js";

 export default class Home2 extends Component{
 
    render(){
        return(
          <View style={styles.container}> 
            
                <Header
                backgroundColor='#007c91'
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{    text: 'GADGET CONSULTANCY',
                                      style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                rightComponent={{ icon: 'search', color: '#fff' }}
                />

            <ScrollView> 
                
                 
                <View >
                    <View style={styles.headingView} >
                        <Text style={styles.text} >RECENTLY VIEWED</Text>
                    </View>

                    <View style={styles.readMoreView} >
                        <TouchableOpacity>
                            <Text style={styles.readMoretext} >Read more</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.questionView} >
                        <Questions />  
                    </View>
                                    
                </View>

            </ScrollView>
                           
          </View>
        )
}}



const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text:{
        color:'#000',
        fontSize: 20,
        fontWeight: 'bold'
      },
       readMoretext:{
        color:'#007c91',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine:'underline'
      },

    headingView:{
        //position : "relative",
        //right: wp('-3%') , 
        paddingHorizontal:12,
        bottom: hp('-1%'),  
      },
      readMoreView:{
         alignSelf:'flex-end',
         paddingRight:8,
         marginVertical:-13
        //position : "relative",
        //paddingHorizontal:50,
       // paddingLeft:40
        //left: wp('70%') , 
        //top: hp('-3%'),
      },
      questionView:{
        position : "relative",
        top: hp('-3%'),
      }
})
*/}