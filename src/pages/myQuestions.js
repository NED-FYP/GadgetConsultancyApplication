import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-elements'
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

                <View style={{marginTop:-15}}>
                    <View style={styles.rectangle}
                          borderTopWidth={2} >
                      <View style={styles.separator}/>

                        <View style={styles.questionTitleCont} >
                            <Text style={styles.questionTitleText} > Question Title</Text>
                        </View>

                        <View style={styles.tagButtonView}>
                            <TouchableOpacity style={styles.tagbutton}>
                                <Text style={styles.tagbuttonText}>#tag</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.editCont} >
                            <TouchableOpacity 
                                onPress={() =>
                                        this.props.navigation.navigate('editQuestion') }> 
                                <Text style={styles.editText} > edit </Text>
                            </TouchableOpacity>
                        </View> 


                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon name='delete'  color="#039be5" size={36} /> 
                        </TouchableOpacity>

                        <View style={styles.likeCont} >
                            <Text style={styles.likeAndQuestionText}>2</Text>
                        </View> 

                        <View style={styles.QuestionCont} >
                            <Text style={styles.likeAndQuestionText} >2</Text>
                        </View> 
                                 
                        <View style={styles.likeIconCont} >
                            <Image source={require('../images/like.png')}/>
                        </View>

                        <View style={styles.questionIconCont} >
                            <Image  source={require('../images/question.png')}/>
                        </View>

                    </View>
                </View>

                <View style={styles.rectangle}>
                    <View style={styles.separator} />

                        <View style={styles.questionTitleCont} >
                            <Text style={styles.questionTitleText} > Question Title</Text>
                        </View>

                        <View style={styles.tagButtonView}>
                            <TouchableOpacity style={styles.tagbutton}>
                                <Text style={styles.tagbuttonText}>#tag</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.editCont} >
                            <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('editQuestion') }> 
                                <Text style={styles.editText} > edit </Text>
                            </TouchableOpacity>
                        </View> 

                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon name='delete'  color="#039be5" size={36} /> 
                        </TouchableOpacity>

                        <View style={styles.likeCont} >
                            <Text style={styles.likeAndQuestionText}>2</Text>
                        </View> 

                        <View style={styles.QuestionCont} >
                            <Text style={styles.likeAndQuestionText} >2</Text>
                        </View> 
                                 
                        <View style={styles.likeIconCont} >
                            <Image source={require('../images/like.png')}/>
                        </View>

                        <View style={styles.questionIconCont} >
                            <Image  source={require('../images/question.png')}/>
                        </View>
                </View>
        
                <View style={styles.rectangle}>
                    <View style={styles.separator}/>

                        <View style={styles.questionTitleCont} >
                            <Text style={styles.questionTitleText} > Question Title</Text>
                        </View>

                        <View style={styles.tagButtonView}>
                            <TouchableOpacity style={styles.tagbutton}>
                                <Text style={styles.tagbuttonText}>#tag</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.editCont} >
                            <TouchableOpacity 
                                   onPress={() => this.props.navigation.navigate('editQuestion') }> 
                                <Text style={styles.editText} > edit </Text>
                            </TouchableOpacity>
                        </View>  

                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon name='delete'  color="#039be5" size={36} /> 
                        </TouchableOpacity>

                        <View style={styles.likeCont} >
                            <Text style={styles.likeAndQuestionText}>2</Text>
                        </View> 

                        <View style={styles.QuestionCont} >
                            <Text style={styles.likeAndQuestionText} >2</Text>
                        </View> 
                             
                        <View style={styles.likeIconCont} >
                            <Image source={require('../images/like.png')}/>
                        </View>

                        <View style={styles.questionIconCont} >
                                <Image  source={require('../images/question.png')}/>
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
    rectangle:{
        width: wp('100%'),
        height: hp('12%'),
        borderWidth: wp('0.5%'),
        borderColor: '#aeaeae',
        backgroundColor: '#ffffff',
        borderTopWidth:0
    },
    separator:{
        height: hp('12%'),
        width: wp('0.7%'),
        backgroundColor: "#aeaeae",
        position : "relative",
        right: wp('-20%') , 
    },
    questionTitleCont:{
        position : "absolute",
        left: wp('22.5%') , 
        top: hp('0.3%'),
    },
    questionTitleText:{
        color: "black",
        fontSize:18, 
        fontWeight:'bold'
    },
    tagbuttonText:{
  
        color: "#0069c0",
        fontSize:14, 
        flex:1,
        textAlign: 'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    tagButtonView:{
        position : "absolute",
        left: wp('23.7%'), 
        top: hp('4%'),
    },
    tagbutton:{
        backgroundColor: '#b6ffff',
        borderRadius: 5,
        width: wp('12%'),
        height:hp('2.5%'),
        justifyContent:'center'
    },
    editCont:{
        position : "absolute",
        left: wp('23.7%') , 
        top: hp('9%'),
    },
    editText:{
        color:'#039be5',
        fontSize:14,
        fontWeight:"bold"
     },
    likeCont:{
        position : "absolute",
        left: wp('5%') , 
        top: hp('1%'), 
    },
    QuestionCont:{
        position : "absolute",
        left: wp('5%') , 
        top: hp('5.8%'), 
    },
    likeAndQuestionText:{
        color: "#000",
        fontSize:14, 
    },
    likeIconCont:{
        position : "absolute",
        left: wp('10%') , 
        top: hp('0.4%'), 
    },
    questionIconCont:{
        position : "absolute",
        left: wp('10%') , 
        top: hp('5%'), 
    },
    deleteButton:{
        right:wp('-44%'),
        top:hp('-8.8%')
    }
});    