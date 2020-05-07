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
 import {Entypo} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


class Edit extends Component {
    constructor(){
      super();
      this.state={
        image: null,
        loadingImage : false
      }
  
    }

    componentDidMount() {
      this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };

    _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
          this.setState({ loadingImage: true });
        }

        console.log(result);
      } catch (E) {
        console.log(E);
      }
    };


  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>

        <View style={styles.imageView}>
            <Image style={styles.avatar} 
              source= { this.state.loadingImage 
                ? 
                { uri: image } 
                : 
                require('../images/profile.png')} 
            />
            <View style={styles.cameraView}>
              <View style={{alignSelf:'center', justifyContent:'center'}}>
                  <TouchableOpacity 
                       onPress= {this._pickImage} >
                       <Entypo  name='camera' color="#aeaeae"  size={20}  /> 
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
                  <Text style={styles.info}>Current Password</Text>
                  < TextInput style={styles.inputBox}
                      underlineColorAndroid='#007c91'
                      placeholder="******" 
                      placeholderTextColor="#000"
                  />
              </View>
          </View>

          <View style={styles.item}>
              <View style={styles.infoView}>
                  <Text style={styles.info}>New Password</Text>
                  < TextInput style={styles.inputBox}
                      underlineColorAndroid='#007c91'
                      placeholder="******" 
                      placeholderTextColor="#000"
                  />
              </View>
          </View>

          <View style={styles.saveButtonView}>
          <TouchableOpacity style={styles.saveButton}
                      onPress={() => this.props.navigation.navigate('viewProfile')}>
              <Text style={styles.text}> Save </Text>
          </TouchableOpacity>
          </View>

      
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageView:{  
    alignItems: 'center',
    justifyContent:'flex-start',
    paddingVertical:20
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#aeaeae",
  },
  cameraView: {
    justifyContent:'center',
    width: wp('9%'),
    height: hp('5%'),
    borderRadius: 20,
    backgroundColor:'#083b66',
    marginLeft:90,
    marginTop:-45
  },
  body:{
    backgroundColor: "#fff",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoView:{
    flex:1,
    paddingLeft:25,
  },
  
  info:{
    fontSize:18,
    marginTop:20,
    color: "#aeaeae",
    fontWeight:'400',
  },
  inputBox:{
    fontSize:16,
    borderBottomWidth:1,
    borderColor:'#aeaeae',
    color:'#000',
    width: wp('82%'),
    height: hp('5%'),
      
  },
  saveButton:{
    backgroundColor: '#083b66',
    borderRadius: 20,
    width: wp('82%'),
    height: hp('6%'),
    justifyContent:'center',
    marginVertical: 40,
  },
  saveButtonView:{
    flex:1,
    alignSelf:'flex-start',
    paddingLeft:25,
  },
  text:{
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  
});
 

export default withNavigation(Edit);