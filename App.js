import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
//import Routes from './src/route' ;
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import ForgotPassword from './src/pages/forgotpassword';
import DetailQuestion from '././src/pages/detailQuestion';
import { createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer, } from 'react-navigation';
import Home from './src/pages/home';
import Questions from "./src/components/questions.js";
import SearchedQuestions from './src/pages/searchedQuestions';
import ViewProfile from './src/pages/viewProfile';
import EditProfile from './src/pages/editProfile';
import SearchHistory from './src/pages/searchHistory';
import MyActivities from './src/pages/myActivities';

import PostQuestion from './src/pages/postQuestion';
import EditQuestion from './src/pages/editQuestion';
import Filter from './src/pages/filter';
import MyQuestions from './src/pages/myQuestions';
import Home2 from './src/pages/home2';
import drawernavigationstack from "./src/drawernavigationstack";


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
  login: { screen: Login },
  signup: { screen: Signup},
  forgotPassword: { screen: ForgotPassword},
  main : drawernavigationstack
},
{
  headerMode: 'none'
},

{
  initialRouteName: 'login'
}
);
const Routes = createAppContainer(Router);

  export default Routes;




