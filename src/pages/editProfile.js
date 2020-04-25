import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image,ScrollView } from 'react-native';
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
            centerComponent={{    text: 'EDIT PROFILE', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
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
  }
}
      
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    SaveButtonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
    },
    SaveButton:{
      backgroundColor: '#007c91',
      borderRadius: 5,
      marginVertical: 40,
      paddingVertical : 13,
      width: wp('35%'),
    },
    SaveButtonView:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:20,
    } 
});
  

  
