import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image,ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-elements'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;


export default class SearchedQuestions extends Component {

    render() {

        let data = [{
            value: 'Newest',
          },  {
            value: 'Relevance',
          }];
       
        return (
          <View style={styles.container}>
         
          <Header
          backgroundColor='#007c91'
          statusBarProps={{ barStyle: 'light-content' ,}}
          leftComponent={{ icon: 'menu', color: '#fff',  onPress:() => this.props.navigation.toggleDrawer()}}
          centerComponent={{    text: 'SEARCH RESULTS', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
          rightComponent={{ icon: 'search', color: '#fff',
          onPress:() => this.props.navigation.navigate('filter') }}
          />

        <ScrollView>
        
          <View style={{ flexDirection: 'row-reverse' ,marginLeft:5 ,marginTop:5 }}>
               <TouchableOpacity style={styles.button}
                      onPress={() =>
                      this.props.navigation.navigate('postQuestion')
                             }> 
                    <Text style={styles.buttonText}>Ask Question</Text>
               </TouchableOpacity>
          </View>

          <View style={styles.searchResult}>
                <View >
                    <Text style={styles.text} >Search Results For Lorem Ipsum is simply dummy text of the pri... 
                    </Text>
                    
                     <View style={{  position:'absolute',marginTop:8,marginLeft:240}}>
                           <Icon name='search'  color="grey" 
                           onPress={() => this.props.navigation.navigate('filter')}/>   
                     </View> 
                </View>
                
               <View style={{   position : "absolute", alignSelf:"flex-end" , marginTop:-6}}>
                    <Dropdown 
                    containerStyle={{  width: wp('25%'), }}
                    label='Order By'
                    data={data}
                    />
               </View>
          </View>

          
          {/**  1st rectangle */}
          <View style={styles.rectangle} >
                <View style={styles.separator}/>

                   <View style={styles.questionTitleCont} >
                      <Text style={styles.questionTitleText} > Question Title</Text>
                   </View>

                   <TouchableOpacity style={styles.tagbutton}>
                       <Text style={styles.tagbuttonText}>tag</Text>
                   </TouchableOpacity>

                   <View style={styles.questionBodyCont} >
                        <Text style={styles.questionBodyText} >Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry.</Text>
                   </View>

                   <View style={styles.timeCont} >
                        <Text style={styles.timeAndUserText} > 1 min ago </Text>
                   </View> 

                   <View style={styles.userCont} >
                         <Text style={styles.timeAndUserText} > By saniya </Text>
                   </View>
 
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
            {/**  2nd rectangle */}
          <View style={styles.rectangle} >
                <View style={styles.separator}/>

                   <View style={styles.questionTitleCont} >
                      <Text style={styles.questionTitleText} > Question Title</Text>
                   </View>

                   <TouchableOpacity style={styles.tagbutton}>
                       <Text style={styles.tagbuttonText}>tag</Text>
                   </TouchableOpacity>

                   <View style={styles.questionBodyCont} >
                        <Text style={styles.questionBodyText} >Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry.</Text>
                   </View>

                   <View style={styles.timeCont} >
                        <Text style={styles.timeAndUserText} > 1 min ago </Text>
                   </View> 

                   <View style={styles.userCont} >
                         <Text style={styles.timeAndUserText} > By saniya </Text>
                   </View>
 
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
            {/**  3rd rectangle */}
          <View style={styles.rectangle} >
          <View style={styles.separator}/>

             <View style={styles.questionTitleCont} >
                <Text style={styles.questionTitleText} > Question Title</Text>
             </View>

             <TouchableOpacity style={styles.tagbutton}>
                 <Text style={styles.tagbuttonText}>tag</Text>
             </TouchableOpacity>

             <View style={styles.questionBodyCont} >
                  <Text style={styles.questionBodyText} >Lorem Ipsum is simply dummy text of the 
                  printing and typesetting industry.</Text>
             </View>

             <View style={styles.timeCont} >
                  <Text style={styles.timeAndUserText} > 1 min ago </Text>
             </View> 

             <View style={styles.userCont} >
                   <Text style={styles.timeAndUserText} > By saniya </Text>
             </View>

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
            {/**  4th rectangle */}
          <View style={styles.rectangle} >
                <View style={styles.separator}/>

                   <View style={styles.questionTitleCont} >
                      <Text style={styles.questionTitleText} > Question Title</Text>
                   </View>

                   <TouchableOpacity style={styles.tagbutton}>
                       <Text style={styles.tagbuttonText}>tag</Text>
                   </TouchableOpacity>

                   <View style={styles.questionBodyCont} >
                        <Text style={styles.questionBodyText} >Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry.</Text>
                   </View>

                   <View style={styles.timeCont} >
                        <Text style={styles.timeAndUserText} > 1 min ago </Text>
                   </View> 

                   <View style={styles.userCont} >
                         <Text style={styles.timeAndUserText} > By saniya </Text>
                   </View>
 
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
        
        </ScrollView>
    </View>
        )
    }}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        button:{
            borderWidth: wp('0.5%'),
            borderColor: '#007c91',
            backgroundColor: '#00acc1',
            borderRadius: 10,
            paddingVertical : 5,
            width: wp('30%'),
          },
          buttonText:{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center'
          },
          searchResult:{
            width: wp('100%'),
            height: hp('9%'),
            borderWidth: wp('0.5%'),
            borderRadius: 10,
            borderColor: '#aeaeae',
            backgroundColor: '#e0e0e0',
            marginTop:5 
          },
          text:{
            color: "#000",
            fontSize:16,
            width:wp('57%'),
            textAlign:'justify'
           },


           rectangle:{
       
            width: wp('100%'),
            height: hp('16%'),
            borderWidth: wp('0.5%'),
            borderColor: '#aeaeae',
            backgroundColor: '#ffffff',
            borderTopWidth:0
            
         },
         separator:{
            height: hp('16%'),
            width: wp('0.7%'),
            backgroundColor: "#aeaeae",
            position : "relative",
            right: wp('-20%') , 
         },
         questionTitleCont:{
          position : "absolute",
          left: wp('22.5%') , 
          top: hp('0.4%'),
         },
         questionTitleText:{
          color: "#000",
          fontSize:18, 
          fontWeight:'bold'
    
         },
         tagbuttonText:{
          color: "#000",
          fontSize:14, 
          textAlign: 'center'
         },
    
         tagbutton:{
          borderWidth: wp('0.5%'),
          borderColor: '#9ea7aa',
          backgroundColor: '#fff',
          borderRadius: 5,
          position : "absolute",
          left: wp('23.7%'), 
          top: hp('4%'),
          textAlign: 'center',
          width: wp('12%'),
         },
         timeCont:{
          position : "absolute",
          left: wp('23.7%') , 
          top: hp('12.7%'),
          
         },
         timeAndUserText:{
          color: "#9ea7aa",
          fontSize:14,
          fontWeight:"bold"
         },
         userCont:{
          position : "absolute",
          right: wp('5%') , 
          top: hp('12.7%'),
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
         questionBodyCont:{
          position : "absolute",
          left: wp('23.7%') , 
          top: hp('7%'), 
          width:wp('70%')
         } ,
         questionBodyText:{
          color: "#000",
          fontSize:14,
         } 

    });    