import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import ForgotPassword from './src/pages/forgotPassword';
import { createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer, } from 'react-navigation';
import drawerNavigationStack from "./src/drawerNavigationStack";
import Splash from './src/pages/splash';

class App extends Component{
  render(){
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="#007c91" barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#00acc1',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

const Router = createStackNavigator({
      splash:{screen: Splash},
      login: { screen: Login },
      signup: { screen: Signup},
      forgotPassword: { screen: ForgotPassword},
      main : drawerNavigationStack,
    },
    {
      headerMode: 'none'
    },
    {
      initialRouteName: 'splash'
    }
);

const Routes = createAppContainer(Router);

export default Routes;




