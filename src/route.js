/**import React, { Component } from 'react'; 
//import {Router , Stack, Scene} from 'react-native-router-flux';
import { StackNavigator, Router } from 'react-navigation';


import Login from "./pages/login";
import Signup from "./pages/signup";

export default class Routes extends Component{
    render(){
        return(
          const Router = StackNavigator(
            {
            login: { screen: Login },
            signup: { screen: SignUp }
            },
           {initialRouteName: login}
           
           )
    
       
        );
      }
} 
//import React, { Component } from 'react'; 
import { createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from "./pages/login";
import Signup from "./pages/signup";

const Router = createStackNavigator({
  login: { screen: Login },
  signup: { screen: Signup},
},
{
  initialRouteName: 'login'
}
);
const Routes = createAppContainer(Router);

  export default Routes;
  */