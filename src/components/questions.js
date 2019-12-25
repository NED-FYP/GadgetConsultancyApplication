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

                     <Text style={styles.questionTitleText} >
                             Question Title
                     </Text>
                  </View>
                        <TouchableOpacity style={styles.button}>
          
                           <Text style={styles.buttonText}>tag
                           </Text>
                        </TouchableOpacity>
                               <View style={styles.timeCont} >

                                 <Text style={styles.timeAndUserText} >
                                1 min ago
                                 </Text>
                               </View>
                                     <View style={styles.userCont} >

                                       <Text style={styles.timeAndUserText} >
                                          By saniya
                                       </Text>

                                     </View>

                                    <View style={styles.likeCont} >
                                        <Text style={styles.likeAndQuestionText}>2</Text>
                                    </View> 
                                    <View style={styles.QuestionCont} >
                                        <Text style={styles.likeAndQuestionText} >2</Text>
                                    </View> 
                                    
                                    <View style={styles.likeIconCont} >
                                    <Image
                                    source={require('../images/like.png')}/>
                                    </View>

                                    <View style={styles.questionIconCont} >
                                    <Image  
                                    source={require('../images/question.png')}/>
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
       marginTop: 20,
        width: wp('100%'),
        height: hp('10%'),
        borderWidth: wp('0.5%'),
        borderColor: '#007c91',
        backgroundColor: '#00acc1',
     },
     separator:{
        height: hp('9.5%'),
        width: wp('0.7%'),
        backgroundColor: "#007c91",
        position : "relative",
        right: wp('-20%') , 
     },
     questionTitleCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-9%'),
     },
     questionTitleText:{
      color: "#fff",
      fontSize:16, 
      fontWeight:'bold'

     },
     buttonText:{
      color: "#007c91",
      fontSize:14, 
      textAlign: 'center'
     },

     button:{
      backgroundColor: '#fff',
      borderRadius: 5,
      position : "relative",
      right: wp('-24%') , 
      top: hp('-8.5%'),
      textAlign: 'center',
      width: wp('12%'),
     },
     timeCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-8.1%'),
      
     },
     timeAndUserText:{
      color: "#fff",
      fontSize:14,
     },
     userCont:{
      position : "relative",
      left: wp('80%') , 
      top: hp('-10.6%'),
     },

     likeCont:{
        position : "relative",
        left: wp('5%') , 
        top: hp('-18%'),

     },
     QuestionCont:{
        position : "relative",
        left: wp('5%') , 
        top: hp('-17.5%'),

     },
     likeAndQuestionText:{
        color: "#fff",
        fontSize:14, 
     },
     likeIconCont:{
        position : "relative",
        left: wp('10%') , 
        top: hp('-23.5%'), 
     },
     questionIconCont:{
        position : "relative",
        left: wp('10%') , 
        top: hp('-23.5%'), 
     }
    
});
     