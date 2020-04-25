import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image,ScrollView } from 'react-native';
import Profile from "../components/profile.js";
import { Header } from 'react-native-elements';

export default class ViewProfile extends Component{
  render(){
    return(
      <View style={styles.container}>  
          <Header
              backgroundColor='#007c91'
              statusBarProps={{ barStyle: 'light-content' }}
              leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer()}}
              centerComponent={{    text: 'VIEW PROFILE', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
              rightComponent={{ icon: 'search', color: '#fff' ,
              onPress:() => this.props.navigation.navigate('filter')}}
          />
          <ScrollView>  
              <Profile/>
          </ScrollView>                
      </View>  
    )
  }
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
  

  
