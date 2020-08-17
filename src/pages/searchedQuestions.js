import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image,ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import HomeQuestions from "../components/homeQuestions.js";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;

export default class SearchedQuestions extends Component {
    render() {
        return (
          <View style={styles.container}>
              <Header
              backgroundColor='#083b66'
              statusBarProps={{ barStyle: 'light-content' }}
              leftComponent={{ icon: 'menu', color: '#fff',onPress:() => this.props.navigation.toggleDrawer()}}
              centerComponent={{    text: 'SEARCH RESULTS', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
              rightComponent={{ icon: 'search', color: '#fff',
              onPress:() => this.props.navigation.navigate('filter') }}
              />

              <ScrollView>
                          
                     <View style={styles.askQuestionView}>
                            <TouchableOpacity style={styles.button}
                                   onPress={() =>
                                   this.props.navigation.navigate('postQuestion')
                                          }> 
                            <Text style={styles.buttonText}>Ask Question</Text>
                            </TouchableOpacity>
                     </View>

                       <HomeQuestions/>
                       <HomeQuestions/>
                       <HomeQuestions/>
                    
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
       askQuestionView:{
              flexDirection: 'row-reverse',
              marginLeft:5,
              marginTop:5,
              marginBottom:5 
       },
       button:{
              backgroundColor: '#083b66',
              paddingVertical : 5,
              width: wp('30%'),
       },
       buttonText:{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center'
       },
      
});    