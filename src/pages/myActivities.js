import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;
import { ScrollView } from 'react-native-gesture-handler';
import Activities from "../components/activities.js";

export default class MyActivities extends Component {

    render() {

        return(
            <View style={styles.container}> 
                
                <Header
                    backgroundColor='#007c91'
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{    text: 'ACTIVITY LOG', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                    rightComponent={{ icon: 'search', color: '#fff' }}
                />
                <ScrollView>  
                <Activities/>  
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
        
    });
  