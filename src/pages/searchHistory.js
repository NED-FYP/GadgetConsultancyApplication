import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image,ScrollView } from 'react-native';
//import {Actions} from 'react-native-router-flux';
import Searches from "../components/searches.js";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';

export default class SearchHistory extends Component{
 
  render(){
    return(
    <View style={styles.container}> 
        
        <Header
            backgroundColor='#007c91'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{    text: 'HISTORY', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' ,
            onPress:() => this.props.navigation.navigate('filter')}}
        />
        <ScrollView>  
            <Searches/>
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
  

  
