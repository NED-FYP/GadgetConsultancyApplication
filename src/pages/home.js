import React, { Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 
 import { Header } from 'react-native-elements';
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
            rightComponent={{ icon: 'search', color: '#fff' ,
            onPress:() => this.props.navigation.navigate('filter'), 
          }}
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
                         {/*Question 1*/ }
                          <TouchableOpacity 
                          onPress={() =>
                          this.props.navigation.navigate('detailQuestion')
                                  }>                  
                        <View style={styles.question1View}
                          >
                          <Questions /> 
                        </View>
                        </TouchableOpacity>
                          {/*Question 2*/ }

                        <TouchableOpacity 
                        onPress={() =>
                        this.props.navigation.navigate('detailQuestion')
                                }>                  
                      <View style={styles.question1View}
                        >
                        <Questions /> 
                      </View>
                      </TouchableOpacity>
                       {/*Question 3*/ }
                      <TouchableOpacity 
                        onPress={() =>
                        this.props.navigation.navigate('detailQuestion')
                                }>                  
                      <View style={styles.question1View}
                        >
                        <Questions /> 
                      </View>
                      </TouchableOpacity>
                                          
             </View>                   

              {/*Recent Tags**/}
              <View>

                 <View style={styles.headingView} >
                     <Text style={styles.text} >RECENT TAGS</Text>
                 </View>
                                        
                             <View  style={{ backgroundColor: '#fff',
                                            width: wp('100%'),
                                            height: hp('15%'),
                                            borderWidth: wp('0.5%'),
                                            borderColor: '#bdbdbd',
                                        }}>
                                  
                                <ScrollView horizontal={true} >
                                  {/*Tag 1*/ }
                                 
                               
                                
                                  <TouchableOpacity 
                                    onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')
                                            }>                  
                                     
                                      <Tag name="Laptop"/>
                                  
                                    </TouchableOpacity>
                                  
                                  {/*Tag 2*/ }
                                    <TouchableOpacity 
                                    onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')
                                            }>                  
                                      <View>
                                      <Tag name="Mobile"/>
                                      </View>
                                    </TouchableOpacity>
                                   {/*Tag 3*/ }
                                    <TouchableOpacity 
                                    onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')
                                            }>                  
                                      <View>
                                      <Tag name="Camera"/>
                                      </View>
                                    </TouchableOpacity>
                                   {/*Tag 4*/ }
                                    <TouchableOpacity 
                                    onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')
                                            }>                  
                                      <View>
                                      <Tag name="Headphones"/>  
                                      </View>
                                    </TouchableOpacity>
                                    
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
                          {/*Question 1*/ }
                          <TouchableOpacity 
                          onPress={() =>
                          this.props.navigation.navigate('detailQuestion')
                                  }>                  
                        <View style={styles.question1View}
                          >
                          <Questions /> 
                        </View>
                        </TouchableOpacity>
                          {/*Question 2*/ }

                        <TouchableOpacity 
                        onPress={() =>
                        this.props.navigation.navigate('detailQuestion')
                                }>                  
                      <View style={styles.question1View}
                        >
                        <Questions /> 
                      </View>
                      </TouchableOpacity>
                       {/*Question 3*/ }
                      <TouchableOpacity 
                        onPress={() =>
                        this.props.navigation.navigate('detailQuestion')
                                }>                  
                      <View style={styles.question1View}
                        >
                        <Questions /> 
                      </View>
                      </TouchableOpacity>
                                   
            </View>
                        {/*Your Interest**/}
                        <View  >
                        <View style={styles.headingView} >
                        <Text style={styles.text} >YOUR INTEREST</Text>
                        </View>
                        {/*Question 1*/ }
                        <TouchableOpacity 
                        onPress={() =>
                        this.props.navigation.navigate('detailQuestion')
                                }>                  
                      <View style={styles.question1View}
                        >
                        <Questions /> 
                      </View>
                      </TouchableOpacity>
                        {/*Question 2*/ }

                      <TouchableOpacity 
                      onPress={() =>
                      this.props.navigation.navigate('detailQuestion')
                              }>                  
                    <View style={styles.question1View}
                      >
                      <Questions /> 
                    </View>
                    </TouchableOpacity>
                      {/*Question 3*/ }
                    <TouchableOpacity 
                      onPress={() =>
                      this.props.navigation.navigate('detailQuestion')
                              }>                  
                    <View style={styles.question1View}
                      >
                      <Questions /> 
                    </View>
                    </TouchableOpacity>
                          
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
    question1View:{
      position : "relative",
      top: hp('-3%'),
   
    },
    
    button:{
      backgroundColor: '#007c91',
      borderRadius: 10,
      marginVertical: 40,
      paddingVertical : 14,
      width: wp('29%'),
    },
    
});
