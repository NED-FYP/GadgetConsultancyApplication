import React,{ Component } from 'react';
import {Text, View, StyleSheet, ScrollView,Image,TouchableOpacity, AsyncStorage} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems} from 'react-navigation-drawer';
import {FontAwesome} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import {styler} from '../../assets/style'



const navigationDrawer = props => {
    const [data,setData] = React.useState("");
    const getLocalStorage=()=>{
        AsyncStorage.getItem('users').then(resp=>{
            console.log("Drawer",resp);
            setData(resp);
        })
        
        
       
    }
    React.useEffect(()=>{AsyncStorage.getItem('users').then(resp=>{
        console.log("Drawer",resp);
        setData(resp);
    })},[]);
    return(
        <ScrollView>
        
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never',  }} >
            <View style={styles.logoView}>
                <FontAwesome name='user-circle-o' color ="#aeaeae" size={80}  />
                <Text style={styles.text}></Text>
                <View style={styles.separator}/>
            </View> 
            <DrawerItems {...props} />

            <View style={styles.logoutButtonView}>
            <TouchableOpacity style={styles.button}
                        //onPress={() => this.props.navigation.navigate('home')}
                           >

                <Text style={styler.text}> Logout </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView:{
        height:hp('19%'),
        alignItems: 'center',
        justifyContent:'flex-start',
        paddingVertical:15
    },
    text:{
        color: "#000",
        fontSize:20,
        marginVertical:10,
        textAlign:'center'
    },
    separator:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#f5f5f5',
    },
    logoutButtonView:{
        height:hp('19%'),
        alignItems: 'center',
        paddingVertical:15
    },
    button:{
        backgroundColor: '#083b66',
        borderRadius: 20,
        width: wp('82%'),
        height: hp('6%'),
        justifyContent:'center',
        marginVertical: 20,
      },
});

export default navigationDrawer

