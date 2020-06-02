import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;

export default class Questions2 extends Component {
  render() {
    return(
      <View style={styles.container}>
    
            <View style={styles.likeIconView} >
                <AntDesign  name='like1'   color="#083b66" size={22}  /> 
            </View>
            <View style={styles.dislikeIconView} >
                <AntDesign  name='dislike1'   color="#083b66" size={22}  /> 
            </View>
          
            <View style={styles.quesTitleView} >
              <Text style={styles.quesTitleText}>Question Title</Text>
            </View>
            <View style={styles.quesDescriptionView} >
              <Text style={styles.quesDescriptionText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
            <View style={styles.deleteIconView} >
                <TouchableOpacity >
                <Icon
                    name='delete'
                    color='#083b66'
                    height={hp('5%')} 
                />
                </TouchableOpacity>
            
       </View>
    
    
    
       </View>
     
   )
  }

}
const styles = StyleSheet.create({
    
    quesTitleView:{
        top:hp('-9%'),
        right: wp('-17%'), 
        position : "relative",
     },
     quesTitleText:{
        fontSize:18,
        fontWeight:'bold'
     },
     likeIconView:{
        //top:-27,
        right: wp('-5%'),
     },
     dislikeIconView :{
        marginTop:13,
        right: wp('-5%'),
     },
     quesDescriptionView:{
       top:hp('-8.5%'),
       right: wp('-17%'), 
       width:('70%')
     },
     deleteIconView:{
        right: wp('-43%'),
        top: hp('-14%')
      }, 
    
});    