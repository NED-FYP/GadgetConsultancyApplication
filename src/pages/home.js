import React, { Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { Header } from 'react-native-elements';
 //import NavigationDrawerStructure from "../components/navigationDrawer.js";
 import Questions from "../components/questions.js";
 import Tag from "../components/tag.js";

 export default class Home extends Component{
 
    render(){
        return(
            <View style={styles.container}> 
            
            <Header
            backgroundColor='#007c91'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{    text: 'GADGET CONSULTANCY', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' }}
            />
            <ScrollView>  
             
            {/*Recently viewed**/}
            <View >
               <View style={styles.headingView} >
                  <Text style={styles.text} >RECENTLY VIEWED</Text>
               </View>
                       <View style={styles.readMoreView} >
                          <TouchableOpacity>
                              <Text style={styles.readMoretext} >Read more</Text>
                          </TouchableOpacity>
                       </View>
                                   <View style={styles.questionView} >
                                      <Questions />  
                                   </View>
                                          
             </View>                   

              {/*Recent Tags**/}
              <View>

                 <View style={styles.headingView} >
                     <Text style={styles.text} >RECENT TAGS</Text>
                 </View>
           
                      <View  style={{ backgroundColor: '#00acc1',
                                      width: wp('100%'),
                                      height: hp('15%'),
                                      borderWidth: wp('0.5%'),
                                      borderColor: '#007c91',
                                   }}>
                          <ScrollView horizontal={true} >
                             <Tag name="Laptop" />
                             <Tag name="Mobile"/>
                             <Tag name="Camera"/>
                             <Tag name="Headphones"/>    
                          </ScrollView>
                       </View>
              </View>

            {/*Mostly viewed**/}
            <View  >
            <View style={styles.headingView} >
            <Text style={styles.text} >MOSTLY VIEWED</Text>
            </View>
             <View style={styles.readMoreView} >
                <TouchableOpacity>
                  <Text style={styles.readMoretext} >Read more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questionView} >
                                      <Questions />  
                                   </View>
                      
            </View>
             {/*Your Interest**/}
            <View  >
            <View style={styles.headingView} >
            <Text style={styles.text} >YOUR INTEREST</Text>
            </View>
             <View style={styles.readMoreView} >
                <TouchableOpacity>
                  <Text style={styles.readMoretext} >Read more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.questionView} >
            <Questions />  
         </View>          
            </View>
           

            
    
            
            </ScrollView>                
            </View>

        )
}}



const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#bdbdbd',
      backgroundColor: '#fff',
      

    },
   
    text:{
      color:'#000',
      fontSize: 20,
      fontWeight: 'bold'
    },
     readMoretext:{
      color:'#007c91',
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine:'underline'

    },

    recenttagsTextCont:{
      position : "relative",
      right: wp('-3%') , 
      bottom: hp('-3%'),
    },

    headingView:{
      position : "relative",
      right: wp('-3%') , 
      bottom: hp('-1%'),
    },
    readMoreView:{
      position : "relative",
      left: wp('70%') , 
      top: hp('-3%'),
    },
    questionView:{
      position : "relative",
      top: hp('-3%'),
   
    }
   
    
});
