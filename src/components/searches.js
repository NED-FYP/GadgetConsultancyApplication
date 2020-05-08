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
import {Icon} from 'react-native-elements';

export default class Searches extends Component {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.rectangle} >
            <View style={styles.signupTextCont} >
                <TouchableOpacity style={styles.clearSearchesButton} >
                  <Text style={styles.clearSearchesButtonText}> Clear Searches </Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dateView} >
            <Text style={styles.dateText}>January 15, 2020</Text>
          </View>

          {/*Rectangle 1**/}
          <View style={styles.rectangle2} >
              <View style={styles.searchIconView} >
                <Icon
                  name='search'
                  color='#083b66'
                  height={hp('5%')} 
                />
              </View>
              <View style={styles.searchContentView} >
                <Text style={styles.searchContentText}>You searched  Lorem Ipsum is simply </Text>
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

           {/*Rectangle 2**/}
          <View style={styles.rectangle2} >
              <View style={styles.searchIconView} >
                <Icon
                  name='search'
                  color='#083b66'
                  height={hp('5%')} 
                />
              </View>
              <View style={styles.searchContentView} >
                <Text style={styles.searchContentText}>You searched  Lorem Ipsum is simply </Text>
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

          <View style={styles.dateView} >
            <Text style={styles.dateText}>January 16, 2020</Text>
          </View>

          {/*Rectangle 3**/}
          <View style={styles.rectangle2} >
              <View style={styles.searchIconView} >
                <Icon
                  name='search'
                  color='#083b66'
                  height={hp('5%')} 
                />
              </View>
              <View style={styles.searchContentView} >
                <Text style={styles.searchContentText}>You searched  Lorem Ipsum is simply  </Text>
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

          {/*Rectangle 4**/}
          <View style={styles.rectangle2} >
              <View style={styles.searchIconView} >
                <Icon
                  name='search'
                  color='#083b66'
                  height={hp('5%')} 
                  />
              </View>
              <View style={styles.searchContentView} >
                  <Text style={styles.searchContentText}>You searched  Lorem Ipsum is simply </Text>
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
     

      </View>
    );  
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexGrow: 1,
    },
    rectangle:{
      width: wp('100%'),
      height: hp('6%'),
      borderBottomWidth:wp('0.3%'),
      borderColor: '#aeaeae',
      backgroundColor: '#fff',   
    },
    rectangle2:{
      width: wp('100%'),
      height: hp('10%'),
      borderWidth: wp('0.5%'),
      borderColor: '#fff',
      backgroundColor: '#fff',
    },
    clearSearchesButtonText:{
      color:'#083b66',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    clearSearchesButton:{
      backgroundColor: '#fff',
      marginVertical: 5,
      paddingVertical : 5,
    },
    dateText:{
      color:'#000',
      fontSize: 16,
      fontWeight: '500',
    },
    dateView:{
      marginTop:15,
      right: wp('-3%')
    },
    searchIconView:{
      left: wp('-43%'),
      bottom: hp('-4%')
    },
    searchContentView:{
      right: wp('-13%'),
      bottom: hp('-0.3%')
    },
    searchContentText:{
      color:'#000',
      fontSize: 15,
    },
    deleteIconView:{
      right: wp('-43%'),
      top: hp('-3.5%')
    },   
});

