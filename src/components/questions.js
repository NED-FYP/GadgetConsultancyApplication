import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
 
export default class Questions extends Component {
    render() {
         return (
            <View style={styles.container}>
               <View style={styles.rectangle} >
                  <View style={styles.separator}/>

                     <View style={styles.questionTitleCont} >
                        <Text style={styles.questionTitleText}> Question Title </Text>
                     </View>

                     <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> #tag </Text>
                     </TouchableOpacity>

                     <View style={styles.timeCont} >
                        <Text style={styles.timeAndUserText} > 1 min ago </Text>
                     </View>

                     <View style={styles.userCont} >
                        <Text style={styles.timeAndUserText} > By saniya </Text>
                     </View>

                     <View style={styles.likeCont} >
                        <Text style={styles.likeAndQuestionText}>2</Text>
                     </View> 
                                    
                     <View style={styles.QuestionCont} >
                        <Text style={styles.likeAndQuestionText} >2</Text>
                     </View> 
                                    
                     <View style={styles.likeIconCont} >
                        <Image source={require('../images/like.png')}/>
                     </View>

                     <View style={styles.questionIconCont} >
                        <Image source={require('../images/question.png')}/>
                     </View>

               </View>  
            </View>
         );
      }
   }

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#bdbdbd',
   },
   rectangle:{
      width: wp('100%'),
      height: hp('12%'),
      borderWidth: wp('0.5%'),
      borderColor: '#bdbdbd',
      backgroundColor: '#fff',
      borderLeftWidth:0,
      borderRightWidth:0
   },
   separator:{
      height: hp('11.5%'),
      width: wp('0.7%'),
      backgroundColor: "#bdbdbd",
      position : "relative",
      right: wp('-20%') , 
   },
   questionTitleCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-11%'),
   },
   questionTitleText:{
      color: "#000",
      fontSize:16, 
      fontWeight:'bold'
   },
   buttonText:{
      color: "#007c91",
      fontSize:14, 
      textAlign: 'center'
   },
   button:{
      backgroundColor: '#b6ffff',
      borderRadius: 5,
      position : "relative",
      right: wp('-24%') , 
      top: hp('-10.5%'),
      textAlign: 'center',
      width: wp('12%'),
   },
   timeCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-9.1%'),  
   },
   timeAndUserText:{
      color: "#000",
      fontSize:14,
   },
   userCont:{
      position : "relative",
      left: wp('80%') , 
      top: hp('-11.6%'),
   },
   likeCont:{
      position : "relative",
      left: wp('5%') , 
      top: hp('-20%'),
   },
   QuestionCont:{
      position : "relative",
      left: wp('5%') , 
      top: hp('-18%'),
   },
   likeAndQuestionText:{
      color: "#000",
      fontSize:14, 
   },
   likeIconCont:{
      position : "relative",
      left: wp('10%') , 
      top: hp('-25.6%'), 
   },
   questionIconCont:{
      position : "relative",
      left: wp('9.9%') , 
      top: hp('-24.5%'), 
   }    
});
     
