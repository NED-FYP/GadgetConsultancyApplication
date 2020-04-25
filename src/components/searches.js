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
                  color='#00aced'
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
                    color='#00aced'
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
                  color='#00aced'
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
                    color='#00aced'
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
                  color='#00aced'
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
                    color='#00aced'
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
                  color='#00aced'
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
                    color='#00aced'
                    height={hp('5%')}
                  />
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.Imagecontainer}>
            <Image style={{width: wp('20%'), height: hp ('10%'), }}
                   source={require('../images/nothing_to_show.png')}/> 
          </View> 

          <View style={styles.nothingToShowView} >
            <Text style={styles.nothingToShowText}>Nothing more to show</Text>
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
      height: hp('7%'),
      borderWidth: wp('0.5%'),
      borderColor: '#bdbdbd',
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
      color:'#0069c0',
      fontSize: 16,
      fontWeight: '400',
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
    Imagecontainer:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingVertical: 80,
    },
    nothingToShowView:{
      marginTop:8,
      bottom: hp('10%'),
      right:('-29%')
    },
    nothingToShowText:{
      color:'#000',
      fontSize: 14,
    }     
});

