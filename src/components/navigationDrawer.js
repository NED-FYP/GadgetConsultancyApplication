import React,{ Component } from 'react';
import {Text, View, StyleSheet, ScrollView,Image} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems} from 'react-navigation-drawer';
import {FontAwesome} from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;

const navigationDrawer = props => (
    <ScrollView>
        
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never',  }} >
            <View style={styles.logoView}>
                <FontAwesome name='user-circle-o' color ="#aeaeae" size={80}  />
                <Text style={styles.text}>Saniya Abdul Rehman </Text>
                <View style={styles.separator}/>
            </View> 
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

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
    },
    separator:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#f5f5f5',
    },
});

export default navigationDrawer

