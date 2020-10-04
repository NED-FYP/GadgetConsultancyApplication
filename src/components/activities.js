import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput ,
  ScrollView
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import {AntDesign} from '@expo/vector-icons';
 import {MaterialCommunityIcons} from '@expo/vector-icons';
 import {MaterialIcons} from '@expo/vector-icons';
 import AsyncStorage from '@react-native-community/async-storage';

 export default class Activities extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionList:[],
      answerList:[],
      // questionbody: '',
      //tagname: [],
      data:[],
      user_Id:''
                  
    };
  }
  
  _getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }
  _getLocalStorage=()=>{
    const value = this._getData("users");
    value.then(resp=>{
        // console.log(resp);
        this.setState({data:resp});
        console.log(this.state.data)
        this.setState({user_Id:this.state.data.users.id})
        // console.log(this.state.user_Id)
    })
  }
  componentDidMount(){
    this._getLocalStorage();
    console.log("here in didmoubnt")
  // console.log(this.state.data)
  // console.log("here in didmoubnt end")
  }
  componentDidUpdate(prevProps, prevState){
  console.log("will mount")
  // console.log(this.state.data)
  const itemId = this.state.user_Id
  if (prevState && prevState.user_Id !== itemId  ) {

  fetch(`http://192.168.1.101:5000/api/question/${this.state.user_Id}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((res) => {
          //   console.log(res);
          this.setState({questionList: res});
          console.log(this.state.questionList);
        });
  fetch(
    `http://192.168.1.101:5000/api/answer/user/${this.state.user_Id}`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((res1) => {
      //   console.log(res1);
      this.setState({answerList: res1});
      console.log(this.state.answerList);
    })
    // .catch((err) => console.log(err))

    .done();
  }
}
  render() { 
        return (
            <View style={styles.container}>
<Text style={styles.heading}>Questions you asked</Text>
<ScrollView>
{this.state.questionList.map((item)=>{
  return(
              <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>{item.created_at}</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>{item.question_body}</Text>
                    </View>
                </View>
 )
})}
   
                </ScrollView>
<Text style={styles.heading}>Answers you gave</Text>

<ScrollView>
         
{this.state.answerList.map((item)=>{
  return(
              <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>{item.created_at}</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign  name='like1'   color="#083b66" size={22}  /> 
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>{item.reply}</Text>
                    </View>
                </View>
 )
})}
   
                </ScrollView>
                    {/* <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>February 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                       <AntDesign  name='dislike1'  color="#083b66" size={22}  /> 
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>You have disliked 1 questions recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>March 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <AntDesign name="tags" size={26} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                        <Text style={styles.likeContentText}>You have used 2 tags recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>June 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                         <MaterialIcons name="question-answer" size={24} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                        <Text style={styles.likeContentText}>You have answered 3 question recently</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.dateAndTimeView} >
                      <Text style={styles.dateAndTimeText}>August 25, 2020</Text>
                    </View>
                    <View style={styles.likeIconView} >
                        <MaterialCommunityIcons name="comment-question" size={24} color="#083b66" />
                    </View>
                    <View style={styles.likeContentView} >
                      <Text style={styles.likeContentText}>You have posted 2 question recently</Text>
                    </View>
                </View> */}

            </View>
      );   
    }
  }

  const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          flexGrow: 1,
          },
          dateAndTimeView:{
            marginTop:6,
            right: wp('-5%'), 
         },
         dateAndTimeText:{
          fontSize:14,
          fontWeight:'bold'
       },heading:{
             fontSize:17,
             fontWeight:'bold'
          },
          likeIconView:{
             marginTop:13,
             right: wp('-5%'),
          },
          likeContentView:{
            top:hp('-2.9%'),
            right: wp('-18%'), 
          }
  });