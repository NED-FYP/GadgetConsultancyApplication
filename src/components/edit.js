import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput 
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen' ;

export default class Edit extends Component {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                    source={require('../images/avatar.png')}/>
                <View style={styles.editView} >
                  <TouchableOpacity>
                    <Text style={styles.editText}>Upload Photo</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>

          <View style={styles.body}>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>User Name</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="Ramsha Khan" 
                        placeholderTextColor="#000"
                    />
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>Password</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="******" 
                        placeholderTextColor="#000"
                    />
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>Phone Number</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="+92 3471232979" 
                        placeholderTextColor="#000"
                    />
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>Email</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="ramshakhan704@gmail.com" 
                        placeholderTextColor="#000"
                    />
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>City</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="Karachi" 
                        placeholderTextColor="#000"
                    />
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.infoView}>
                    <Text style={styles.info}>Language</Text>
                    < TextInput style={styles.inputBox}
                        underlineColorAndroid='#007c91'
                        placeholder="English" 
                        placeholderTextColor="#000"
                    />
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
    inputBox:{
        paddingHorizontal: 10,
        fontSize:16,
        color:'#000',
        width: wp('82%'),
        height: hp('5%'),
    },
});
 

