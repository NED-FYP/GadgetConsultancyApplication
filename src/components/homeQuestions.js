import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;

export default class HomeQuestions extends Component {
  render() {
    return(
        <View style={styles.container}>
  
            <View style={styles.separator}>
            
                    
                    <View style={styles.dislikeIconView} >
                    <Image source={require('../images/answer.png')}/>
                        
                    </View>
                    <View style={styles.NumberOfLikeDislikeView} >
                                <Text style={styles.NumberOfLikeDislikeText}>2</Text>
                    </View>
          
            </View>

            <View style={styles.quesTitleView} >
              <Text style={styles.quesTitleText}>What is the latest Nokia mobile </Text>
            </View>
            <View style={styles.quesDescriptionView} >
              <Text style={styles.quesDescriptionText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
            
    
    
            </View>
       
      
     
   )
  }

}
const styles = StyleSheet.create({
    container:{
        width: wp('80%'),
        height: hp('12%'),
    },

    separator:{
      
        height: hp('11.5%'),
        width: wp('20%'),
    },

    quesTitleView:{
        top:hp('-10%'),
        right: wp('-17%'), 
        width:('100%')
     },
     quesTitleText:{
        fontSize:17,
        color: "#083b66", 

     },
     
     dislikeIconView :{
        marginTop:11,
        right: wp('-8%'),
     },
     NumberOfLikeDislikeView:{
        position: "absolute",
        left: wp('9.5%') , 
        top:hp('6%')
     },
     NumberOfLikeDislikeText:{
      fontSize:17,
      color: "#083b66",
      fontWeight:'400'

     },
     quesDescriptionText:{
        fontSize:15,
        
     },
     quesDescriptionView:{
       top:hp('-9.5%'),
       right: wp('-17%'), 
       width:('100%')
     },
     deleteIconView:{
        right: wp('-43%'),
        top: hp('-14%')
      }, 
      
    
});    