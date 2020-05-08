import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput 
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import {AntDesign} from '@expo/vector-icons';
 import {MaterialCommunityIcons} from '@expo/vector-icons';
 import {MaterialIcons} from '@expo/vector-icons';

 export default class Activities extends Component {
    render() { 
        return (
            <View style={styles.container}>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>January 23, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>You have liked 2 questions recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>February 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                       <AntDesign  name='dislike1'  color="#083b66" size={22}  /> 
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>You have disliked 1 questions recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>March 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign name="tags" size={26} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                        <Text style={styles.likeContentText}>You have used 2 tags recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>June 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                         <MaterialIcons name="question-answer" size={24} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                        <Text style={styles.likeContentText}>You have answered 3 question recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>August 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <MaterialCommunityIcons name="comment-question" size={24} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>You have posted 2 question recently</Text>
                    </View>
                </View>

            </View>
      );   
    }
  }

  const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          flexGrow: 1,
          },
          dateAndTimeView:{
             marginTop:6,
             right: wp('-5%'), 
          },
          dateAndTimeText:{
             fontSize:17,
             fontWeight:'bold'
          },
          likeIconView:{
             marginTop:13,
             right: wp('-5%'),
          },
          likeContentView:{
            top:hp('-2.9%'),
            right: wp('-18%'), 
          }
  });