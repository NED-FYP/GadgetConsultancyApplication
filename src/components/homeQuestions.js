import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen' ;
   import { withNavigation } from 'react-navigation';

 class HomeQuestions extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionList : []
        };
  }
 componentWillMount(){
    fetch('http://192.168.1.101:5000/api/questions', {
                  method: 'GET',
  
                 
          })
          .then((response) => response.json())
          .then(res => {
            // console.log(res);
          this.setState({questionList : res})
          console.log(this.state.questionList)
   
          })
          // .catch(err)=>console
          .done();
       
        }

   
  /** 
   questionList =() =>{
    return this.state.questions.map(element => {
      return (
        <View>
          <Text>{element.title}</Text>
          <Text>{element.question_body}</Text>
        </View>
      );
    });
  };
  */
   
 
  render() {
    
 
    return(
        <View style={styles.container}>
  
            <View style={styles.separator}>
            
                    
                    <View style={styles.dislikeIconView} >
                    <Image source={require('../images/answer.png')}/>
                        
                    </View>
                    <View style={styles.NumberOfLikeDislikeView} >
                                <Text style={styles.NumberOfLikeDislikeText}>2</Text>
                    </View>
          
            </View>
      {this.state.questionList.map((item)=>{
    return(
    <View>
            <TouchableOpacity style={styles.quesTitleView} onPress={() =>this.props.navigation.navigate('detailQuestion',{id: item.id})} >
              <Text style={styles.quesTitleText}>{item.question_title}-{item.id} </Text>
              {/* <Text style={styles.quesTitleText}> </Text> */}
            
            </TouchableOpacity>
            <View style={styles.quesDescriptionView} >
              <Text style={styles.quesDescriptionText}>
                  {item.question_body}
              </Text>
              </View>
            </View>
      
      )    
    })}
    </View>
       
      
     
   )
  }
  }
const styles = StyleSheet.create({
    container:{
        width: wp('80%'),
        height: hp('12%'),
    },

    separator:{
      
        height: hp('11.5%'),
        width: wp('20%'),
    },

    quesTitleView:{
        top:hp('-10%'),
        right: wp('-17%'), 
        width:('100%')
     },
     quesTitleText:{
        fontSize:17,
        color: "#083b66", 

     },
     
     dislikeIconView :{
        marginTop:11,
        right: wp('-8%'),
     },
     NumberOfLikeDislikeView:{
        position: "absolute",
        left: wp('9.5%') , 
        top:hp('6%')
     },
     NumberOfLikeDislikeText:{
      fontSize:17,
      color: "#083b66",
      fontWeight:'400'

     },
     quesDescriptionText:{
        fontSize:15,
        
     },
     quesDescriptionView:{
       top:hp('-9.5%'),
       right: wp('-17%'), 
       width:('100%')
     },
     deleteIconView:{
        right: wp('-43%'),
        top: hp('-14%')
      }, 
      
    
});    

export default withNavigation(HomeQuestions);