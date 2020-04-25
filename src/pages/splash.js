import React, { Component } from 'react';
import { StyleSheet,Image, View } from 'react-native';
import { NavigationActions ,StackActions } from "react-navigation";

  const resetAction= StackActions.reset({
    index:0,
    actions:[
      NavigationActions.navigate({routeName:'login'})
    ]
  })

export default class Splash extends Component{

    componentDidMount(){
        setTimeout(
            () =>{
                this.props.navigation.dispatch(resetAction)
            },
            4 * 1000
        );
    }

    render(){
      return (
        <View style={styles.container}>
           <Image source={require('../images/splashScreenLogo.png')} />
        </View>
      );
    }
}
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent:'center',
    },
  });