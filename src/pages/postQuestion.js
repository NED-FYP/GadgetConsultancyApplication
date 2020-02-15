import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image ,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;
   import KeyboardShift from "../components/keyboardShift.js";

  
     
   

export default class PostQuestion extends Component{
  constructor(props) {
    super(props);
  }
    render(){
        return(
          <KeyboardShift>
          {() => (

            <View style={styles.container}> 
            
            <Header
            backgroundColor='#007c91'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{    text: 'POST A QUESTION', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' , 
            onPress:() => this.props.navigation.navigate('filter'), }}
          
         
            />

            <View style={styles.Imagecontainer}>
               <Image  style={{width: 130, height: 150}}
                  source={require('../images/question-icon.png')}/> 
            </View> 
            
            
            
            <View style={styles.headingView} >
               <Text style={styles.text} >Title</Text>
                <View style={styles.inputBoxView}>
                 < TextInput style={styles.inputBox}
                     multiline
                     placeholder="Lorem Ipsum is simply dummy text" 
                     placeholderTextColor="grey"

                     returnKeyType = { "next" }
                     onSubmitEditing={() => { this.secondTextInput.focus(); }}
                     blurOnSubmit={false}
                  />
                </View>
            </View>

            <View style={styles.headingView} >
               <Text style={styles.text} >Body</Text>
                <View style={styles.inputBoxView}>
                 < TextInput style={styles.bodyInputBox}
                     multiline
                     numberOfLines={4}
                     placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen
                     book." 
                     placeholderTextColor="grey" 

                     ref={(input) => { this.secondTextInput = input; }}
                     returnKeyType = { "next" }
                     onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                  />
                </View>
            </View>

            <View style={styles.headingView} >
               <Text style={styles.text} >Tag</Text>
                <View style={styles.inputBoxView}>
                 < TextInput style={styles.inputBox}
                     multiline
                     placeholder="Lorem Ipsum is simply dummy text" 
                     placeholderTextColor="grey"

                     
                     ref={(input) => { this.thirdTextInput = input; }}
                     returnKeyType = { "done" }
                     onSubmitEditing={this.handleTitleInputSubmit}
                     blurOnSubmit
                     
                  />
                </View>
            </View>

            <View style={styles.postYourQuestionView} >
                 <TouchableOpacity style={styles.postYourQuestionButton}
                                onPress={() =>
                                this.props.navigation.navigate('home')
                 }>
                 <Text style={styles.buttonText}>Post Your Question
                 </Text>
                 </TouchableOpacity>
                 </View>

                  

            </View>
            )}
            </KeyboardShift> 

           
        )}}

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',

            },
            Imagecontainer:
            {
              alignSelf:'center'
              //position : "relative",
              //top: hp('10%') ,
            },

            text:{
                color:'#000',
                fontSize: 20,
                fontWeight: '500'
              },
              headingView:{
                position : "relative",
                right: wp('-3%') , 
                bottom: hp('-1%'),
              },
            
              inputBox:{
                width: wp('95%'),
                height: hp('5%'),
                borderWidth: 1,
                paddingHorizontal: 10,
                fontSize:16,
                color:'#000',
                
            },
            inputBoxView:{
            marginBottom:15
            },
            bodyInputBox:{
                width: wp('95%'),
                height: hp('20%'),
                borderWidth: 1,
                paddingHorizontal: 10,
                fontSize:16,
                color:'#000', 
            },

            postYourQuestionButton:{
                width:wp('50%'),
                height: hp('5%'),
                backgroundColor: '#007c91',
                borderRadius: 5,
                //paddingHorizontal:10,
               //marginVertical: 80,
                paddingVertical : 8,
              },
              postYourQuestionView:{
                marginVertical:10,
                paddingHorizontal:10 
               // position : "absolute",
               // bottom: hp('-18%') ,  
              },
              buttonText:{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center'
              },
        

        });