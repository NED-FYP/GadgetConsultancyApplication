import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import Questions2 from "../components/questions2.js";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;

export default class MyQuestions extends Component {
  render() {
            let data = [
                {
                    value: 'Newest',
                },
                {
                    value: 'Most Viewed',
                },
                {
                    value: 'Most Liked',
                },
                {
                    value: 'Unanswered',
                }
           ];

        return (

            <View style={styles.container}>
        
                <Header
                backgroundColor='#083b66'
                statusBarProps={{ barStyle: 'light-content' ,}}
                leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer()}}
                centerComponent={{    text: 'MY QUESTIONS', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                rightComponent={{ icon: 'search', color: '#fff' ,
                onPress:() => this.props.navigation.navigate('filter')}}
                />
                <ScrollView>  
                
                <View  style={styles.dropdown} >
                    <Dropdown 
                        containerStyle={{  width: wp('35%'), }}
                        label='Order By'
                        data={data}
                    />
                </View>
                <Questions2/>
                
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
    dropdown:{
        alignSelf:"flex-end",
        top:hp('-2%')
    },
    
    
});    