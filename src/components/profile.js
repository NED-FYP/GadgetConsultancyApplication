import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;
 import { withNavigation } from 'react-navigation';
 import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
     data:""
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
        this.setState({"data":resp});
    })
  }
  componentDidMount(){
    this._getLocalStorage();
  }
  render() {
    return (
      <View style={styles.container}>
      
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../images/profile.png')}/>
                <Text style={styles.name}>{this.state.data.users?this.state.data.users.user_name:""}</Text>
                <View style={styles.editView} >
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('editProfile')}>
                      <Text style={styles.editText}>Edit Profile</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>

          <View style={styles.body}>

            <View style={styles.item}>
              <View style={styles.infoView}>
                <Text style={styles.info}>Phone Number</Text>
                <Text style={styles.infoContent}>+92 3471232979</Text>
              </View> 
            </View>

            <View style={styles.item}>
              <View style={styles.infoView}>
                <Text style={styles.info}>Email</Text>
                <Text style={styles.infoContent}>ramshakhan704@gmail.com</Text>
              </View> 
            </View>

            <View style={styles.item}>
              <View style={styles.infoView}>
                <Text style={styles.info}>City</Text>
                <Text style={styles.infoContent}>Karachi</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.infoView}>
                <Text style={styles.info}>Language</Text>
                <Text style={styles.infoContent}>English</Text>
              </View>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#fff",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    fontSize:18,
    marginTop:20,
    color: "#000",
  },
  infoView:{
    flex:1,
    paddingLeft:25,
  },
  
  info:{
    fontSize:18,
    marginTop:20,
    color: "#616161",
    fontWeight:'200',
  },
  editView:{
    position : "absolute",
     left: wp('39%') , 
     bottom: hp('1%'),
    },
    editText:{
     color: '#0069c0',
     fontSize:15,
     textDecorationLine: 'underline',
     fontWeight:'bold'

    },
});

export default withNavigation(Profile);