import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image,ScrollView } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import Edit from '../components/edit.js';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';

export default class EditProfile extends Component{
 
  render(){
    return(
    <View style={styles.container}> 
        
        <Header
            backgroundColor='#007c91'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer()  }}
            centerComponent={{    text: 'VIEW PROFILE', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' ,
            onPress:() => this.props.navigation.navigate('filter')}}
        />
        <ScrollView>  
            <Edit/>
            <View style={styles.SaveButtonView}>
                    <TouchableOpacity style={styles.SaveButton}
                        onPress={() =>
                        this.props.navigation.navigate('viewProfile')
                    }>
                        <Text style={styles.SaveButtonText}> Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>                
    </View>
      
              )
      }}
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
         // backgroundColor: '#bdbdbd',
          backgroundColor: '#fff',
          
    
        },
        SaveButtonText:{
          fontSize: 16,
          fontWeight: '500',
          color: '#ffffff',
          textAlign: 'center'
        },
        SaveButton:{
          //width:300,
          backgroundColor: '#007c91',
          borderRadius: 5,
          marginVertical: 40,
          paddingVertical : 13,
          width: wp('35%'),
          //height: hp('5%'),
        },
        SaveButtonView:{
          flex:1,
          alignItems:'flex-end',
          paddingRight:20,
          //marginTop:2
        
         // position : "absolute",
          // top: hp('90%'),
           //right: hp('2%'),

        }
        
        
    });
  

  
