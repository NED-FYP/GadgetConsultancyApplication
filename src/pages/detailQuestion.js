import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Image, ScrollView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import { Header } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
 
export default class DetailQuestion extends Component{
   render(){
      return(
         <View style={styles.container}>
               <Header
                backgroundColor='#083b66'
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => this.props.navigation.toggleDrawer() }}
                centerComponent={{ text: 'DETAIL PAGE', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                rightComponent={{ icon: 'search', color: '#fff', 
                onPress:() => this.props.navigation.navigate('filter') }}
                />
               <ScrollView>  
                  <View style={styles.rectangle} >
                     <View style={styles.separator}/>

                        <View style={styles.questionTitleCont} >
                           <Text style={styles.questionTitleText} >Lorem Ipsum is simply dummy text </Text>
                        </View>

                        <TouchableOpacity style={styles.button}>
                           <Text style={styles.buttonText}>#css</Text>
                        </TouchableOpacity>
                                      
                        <View style={styles.buttonTag} >
                           <TouchableOpacity style={styles.button}>
                              <Text style={styles.buttonText}>#java</Text>
                           </TouchableOpacity>
                        </View> 
                                     
                        <View style={styles.numberView} >
                           <Text style={styles.numberText}>2</Text>
                        </View> 
                                                          
                        <View style={styles.likeIconCont} >
                           <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                        </View>

                        <View style={styles.dislikeIconCont} >
                           <AntDesign  name='dislike1'   color="#083b66" size={22}  /> 
                        </View>

                  </View>
             
                  <View style={styles.questionBody} >
                     <Text style={styles.questionBodyText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                     </Text>
                  </View>

                  <View style={styles.userView} >

                     <View style={styles.userIconView} >
                     <FontAwesome5 name='user-alt' color ="#757575" size={28}  />
                     </View>
                              
                     <View style={styles.userNameView} >
                        <Text style={styles.userNameText}>Ramsha Khan</Text>
                     </View>

                     <View style={styles.askedView} >
                        <Text style={styles.askedText}>asked</Text>
                     </View>

                     <View style={styles.timeView} >
                        <Text style={styles.timeText}>2 hours ago</Text>
                     </View>

                  </View>

                  <View style={styles.answerHeadingView} >
                     <Text style={styles.answerHeadingText}> 1 Answer </Text>
                  </View> 

                  <View style={styles.answerBodyRectangle} >
                     <View style={styles.answerBodyseparator}/>

                        <View style={styles.answerBodyView} >
                           <Text style={styles.answerBodyText} >
                              Lorem Ipsum is simply dummy text It
                              is a long established fact that a reader will be distracted by the readable
                              content of a page when looking at its layout. The point of using Lorem Ipsum 
                              is that it has a more-or-less normal distribution of letters, as opposed to 
                              using 'Content here, content here', making it look like readable English. 
                           </Text>
                        </View>
                                  
                        <View style={styles.iconContainerView}>
                           <View style={styles.likeIconCont} >
                              <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                           </View>
                           <View style={styles.numberView2} >
                              <Text style={styles.numberText}>2</Text>
                           </View>
                           <View style={styles.dislikeIconCont} >
                              <AntDesign  name='dislike1'   color="#083b66" size={22}  />
                           </View>
                        </View>
                  </View>

                  <View style={styles.userView} >

                     <View style={styles.userIconView} >
                     <FontAwesome5 name='user-alt' color ="#757575" size={28}  />
                     </View>

                     <View style={styles.userNameView} >
                        <Text style={styles.userNameText}>Saniya Abdul Rehman</Text>
                     </View>
              
                     <View style={styles.askedView} >
                        <Text style={styles.askedText}>answered</Text>
                     </View>

                     <View style={styles.timeView} >
                        <Text style={styles.timeText}>2 hours ago</Text>
                     </View>

                  </View> 

                  <View style={styles.yourAnswerHeadingView} >
                     <Text style={styles.yourAnswerHeadingText}> Your Answer</Text>
                  </View>

                  <View style={styles.yourAnswerBodyView} >
                    <Text style={styles.questionBodyText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                     </Text>
                  </View>

                  <View style={styles.postYourAnswerView} >
                     <TouchableOpacity style={styles.postYourAnswerButton}
                        onPress={() =>
                        this.props.navigation.navigate('login')
                     }>
                        <Text style={styles.answerButtonText}>Post Your Answer
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
      backgroundColor: '#fff',
      flex: 1,
   },
   rectangle:{
      width: wp('100%'),
      height: hp('12%'),
      borderWidth: wp('0.5%'),
      borderColor: '#bdbdbd',
      backgroundColor: '#fff',        
   },
   separator:{
      height: hp('11.5%'),
      width: wp('0.7%'),
      backgroundColor: "#bdbdbd",
      position : "relative",
      right: wp('-20%') , 
   },
   questionTitleCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-11%'),
   },
   questionTitleText:{
      color: "#083b66",
      fontSize:17, 
      fontWeight:'bold'
   },
   buttonText:{
      color: "#083b66",
      fontSize:14, 
      textAlign: 'center'
   },
   button:{
      backgroundColor: '#CDD7E0',
      borderRadius: 5,
      position : "relative",
      right: wp('-24%') , 
      top: hp('-8.5%'),
      textAlign: 'center',
      width: wp('12%'),
   },
   timeCont:{
      position : "relative",
      right: wp('-24%') , 
      top: hp('-9.1%'),
   },
   timeAndUserText:{
      color: "#fff",
      fontSize:14,
   },
   numberView:{
      position : "relative",
      left: wp('7.7%') , 
      top: hp('-15%'),
   },
   numberText:{
      color: "#000",
      fontSize:14, 
   },
   likeIconCont:{
      position : "relative",
      left: wp('6%') , 
      top: hp('-21%'), 
   },
   dislikeIconCont:{
      position : "relative",
      left: wp('6%') , 
      top: hp('-18%'), 
   },
   buttonTag:{
      position : "relative",
      right: wp('-15%') , 
      top: hp('-2.3%'),
   },
   questionBody:{  
      width: wp('97%'),
      borderWidth: wp('0.5%'),
      borderColor: '#fff',
      backgroundColor: '#fff',
      marginTop:6,
      alignSelf:'center' ,
      textAlign: 'center'
   },
   questionBodyText:{
      color: "#000",
      fontSize:16, 
      textAlign: 'left'
   },
   userView:{
      width: wp('100%'),
      height: hp('6%'),
      borderWidth: wp('0.5%'),
      borderColor: '#CDD7E0',
      backgroundColor: '#CDD7E0',
      marginTop:6,
   },
   userIconView:{
      position : "relative",
      left: wp('5%') , 
      top: hp('0.8%'),
   },
   userNameView:{
      position : "relative",
      left: wp('15%') , 
      top: hp('-4%'),
   },
   userNameText:{
      color: "#757575",
      fontSize:14,
   },
   editView:{
      position : "relative",
      left: wp('36%') , 
      top: hp('-6.5%'),
   },
   editText:{
      color: '#0069c0',
      fontSize:12,
      textDecorationLine: 'underline'
   },
   askedView:{
      position : "relative",
      right: wp('-80%') , 
      top: hp('-6.5%'),
   },
   askedText:{
      color: '#000',
      fontSize:14,
      fontWeight:'bold'
   },
   timeView:{
      position : "relative",
      right: wp('-78%') , 
      top: hp('-6%'),
   },
   timeText:{
      color: '#757575',
      fontSize:13,
   },
   answerHeadingView:{
      position : "relative",
      right: wp('-4%') ,
      backgroundColor: '#fff',
      marginTop:4,
   },
   answerHeadingText:{
      color: "#000",
      fontSize:16, 
      fontWeight:'bold'
   },
   answerBodyRectangle:{
      width: wp('100%'),
      height: hp('27%'),
      borderWidth: wp('0.5%'),
      borderColor: '#bdbdbd',
      backgroundColor: '#fff',
      marginTop:4
   },
   answerBodyView:{
      width: wp('78%'),
      borderWidth: wp('0.5%'),
      borderColor: '#fff',
      backgroundColor: '#fff',
      marginTop:4,
      position : "relative",
      right: wp('-22%') , 
      top: hp('-26%'),
   },
   answerBodyText:{
      color: "#000",
      fontSize:16, 
   },
   iconContainerView:{
      position : "relative",
      left: wp('1%') , 
      top: hp('-25%'), 
   },
   numberView2:{
      position : "relative",
      left: wp('7.7%') , 
      top: hp('-19.5%'),
   },
   answerBodyseparator:{
      height: hp('26.5%'),
      width: wp('0.7%'),
      backgroundColor: "#bdbdbd",
      position : "relative",
      right: wp('-20%') ,
   },
   yourAnswerHeadingView:{
      position : "relative",
      right: wp('-4%') ,
      backgroundColor: '#fff',
      marginTop:4,
   },
   yourAnswerHeadingText:{
      color: "#000",
      fontSize:16, 
      fontWeight:'bold'
   },
   yourAnswerBodyView:{
      width: wp('95%'),
      borderWidth: wp('0.5%'),
      borderColor: '#bdbdbd',
      backgroundColor: '#fff',
      marginTop:4,
      alignSelf:'center' ,
      textAlign: 'center',
      paddingHorizontal: 8
   },
   postYourAnswerButton:{
      width: wp('70%'),
      height:hp('6.5%'),
      backgroundColor: '#083b66',
      justifyContent:'center',
   },
   postYourAnswerView:{
      flex:1,
      paddingHorizontal:9,
      paddingVertical:8
   },
   answerButtonText:{
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
   },
});