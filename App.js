import React, { Component } from 'react'; 
import { StyleSheet, Text, View, StatusBar } from 'react-native';
//import Routes from './src/route' ;
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import ForgotPassword from './src/pages/forgotpassword';
//import DetailQuestion from '././src/pages/detailQuestion';
import { createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer, } from 'react-navigation';
import Home from './src/pages/home';
import Questions from "./src/components/questions.js";
import SearchedQuestions from './src/pages/searchedQuestions';



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




