import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput 
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import {Icon} from 'react-native-elements';

 export default class Activities extends Component {

    render() {
        let data = [{
            value: 'Newest',
          },  {
            value: 'Relevance',
          }];
        return (
            <View style={styles.container}>
                {/**<View style={{   position : "absolute", top:hp('2%')  }}>
                <Dropdown 
                containerStyle={{  width: wp('25%'), }}
                label='Order By'
                data={data}
                />
        </View>*/ }
        <View >
                  <View style={styles.dateAndTimeView} >
                    <Text style={styles.dateAndTimeText}>January 23, 2020</Text>
                  </View>
                  <View style={styles.likeIconView} >
                        <Image
                          source={require('../images/Like2.png')}/>
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
                        <Image
                          source={require('../images/dislike.png')}/>
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
                    <Image
                      source={require('../images/tag.png')}/>
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
                    <Image
                      source={require('../images/question.png')}/>
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
                    <Image
                      source={require('../images/question.png')}/>
              </View>
                    <View style={styles.likeContentView} >
                        <Text style={styles.likeContentText}>You have posted 2 question recently</Text>
                    </View>
          </View>

   

            </View>
            );
      
    }}
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
            //marginTop:2,
            top:hp('-2.9%'),
            right: wp('-18%'), 
          }
        });