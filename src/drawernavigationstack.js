import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import navigationDrawer from './components/navigationDrawer'
import Home from "./pages/home";
import DetailQuestion from "./pages/detailQuestion";
import SearchedQuestions from "./pages/searchedQuestions";
import ViewProfile from "./pages/viewProfile";
import EditProfile from "./pages/editProfile";
import SearchHistory from "./pages/searchHistory";
import MyActivities from "./pages/myActivities";
import PostQuestion from "./pages/postQuestion";
import EditQuestion from "./pages/editQuestion";
import Filter from "./pages/filter";
import MyQuestions from "./pages/myQuestions";
const navigation = createDrawerNavigator(
    {
        home: {screen: Home,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => <FontAwesome name='home' color={tintColor} size={22}  />
            },
        },
        viewProfile: {screen: ViewProfile,
            navigationOptions: {
                drawerLabel: 'My Account',
                drawerIcon: ({tintColor}) => <FontAwesome name='user-circle'  color={tintColor} size={20}  />
            }
        },
        searchHistory: {screen: SearchHistory,
            navigationOptions: {
                drawerLabel: 'History',
                drawerIcon: ({tintColor}) => <FontAwesome name='history' color={tintColor} size={22}  />
            }
        },
        myQuestions: {screen: MyQuestions,
            navigationOptions: {
                drawerLabel: 'My Questions',
                drawerIcon: ({tintColor}) => <AntDesign name='questioncircle' color={tintColor} size={20}  />
            }
        },
        myActivities: {screen: MyActivities,
            navigationOptions: {
                drawerLabel: 'My Activity',
                drawerIcon: ({tintColor}) => <MaterialIcons name='access-time' color={tintColor} size={22} />
            }
        },
        
        detailQuestion: {screen: DetailQuestion,
            navigationOptions: {
                drawerLabel: () => null
            }},
        searchedQuestions: {screen: SearchedQuestions,
            navigationOptions: {
                drawerLabel: () => null
            }},
        editProfile: {screen: EditProfile,
            navigationOptions: {
                drawerLabel: () => null
            }},
        postQuestion: {screen: PostQuestion,
            navigationOptions: {
                drawerLabel: () => null
            }},
        editQuestion: {screen: EditQuestion,
            navigationOptions: {
                drawerLabel: () => null
            }},
        filter: {screen: Filter,
            navigationOptions: {
                drawerLabel: () => null
            }},
    },
    {
        contentComponent : navigationDrawer,
        initialRouteName: 'home',
        headerMode: 'none',
        navigationOptions : {
            headerVisible : false
        },
        contentOptions: {
            activeTintColor: '#007c91',
            activeBackgroundColor:'#f5f5f5'
        }
    }
)
export default createAppContainer(navigation)
