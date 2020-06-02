import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
 import {MaterialCommunityIcons} from '@expo/vector-icons';
 import {MaterialIcons} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;
import { SearchBar } from 'react-native-elements';

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

                <View  style={styles.dropdown} >
                    <Dropdown 
                        containerStyle={{  width: wp('35%'), }}
                        label='Order By'
                        data={data}
                    />
                </View>

                <View >
                    <View style={styles.quesTitleView} >
                      <Text style={styles.quesTitleText}>Question Title</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                    </View>
                    
                    <View style={styles.quesDescriptionView} >
                      <Text style={styles.quesDescriptionText}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Text>
                    </View>
                    <View style={styles.dislikeIconView} >
                        <AntDesign  name='dislike1'   color="#083b66" size={22}  /> 
                    </View>
                </View>

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
    quesTitleView:{
        marginTop:4,
        right: wp('-17%'), 
     },
     quesTitleText:{
        fontSize:17,
        fontWeight:'bold'
     },
     likeIconView:{
        top:-27,
        right: wp('-5%'),
     },
     dislikeIconView :{
        marginTop:13,
        right: wp('-5%'),
     },
     quesDescriptionView:{
       top:hp('-1.9%'),
       right: wp('-17%'), 
     }
    
});    