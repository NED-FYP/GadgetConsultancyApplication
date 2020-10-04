import React, { Component } from 'react'; 
import { StyleSheet, Text, View,TouchableOpacity, Image,ScrollView } from 'react-native';
import Edit from '../components/edit.js';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import { Header } from 'react-native-elements';

export default class EditProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
     profileData:{}
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
        console.log(resp);
        this.setState({"profileData":resp});
    })
  }
  componentDidMount(){
    this._getLocalStorage();
  }
  render(){
    return(
      <View style={styles.container}> 
        <Header
            backgroundColor='#083b66'
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer()  }}
            centerComponent={{    text: 'EDIT PROFILE', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
            rightComponent={{ icon: 'search', color: '#fff' ,
            onPress:() => this.props.navigation.navigate('filter')}}
        />
        {/**<ScrollView>  */}
          <Edit/>
        {/**</ScrollView>   */}             
      </View>
    )
  }
}
      
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});
  

  
