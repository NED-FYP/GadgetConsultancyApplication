import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image} from 'react-native';
import { Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Activities from "../components/activities.js";

export default class MyActivities extends Component {
    render() {
        return(
            <View style={styles.container}> 
                <Header
                    backgroundColor='#083b66'
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer()}}
                    centerComponent={{    text: 'ACTIVITY LOG', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                    rightComponent={{ icon: 'search', color: '#fff',
                    onPress:() => this.props.navigation.navigate('filter') }}
                />
                <ScrollView>  
                    <Activities/>  
                </ScrollView>                
            </View>
      
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },  
});
