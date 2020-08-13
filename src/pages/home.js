import React, { Component } from 'react'; 
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import { Header } from 'react-native-elements';
import HomeQuestions from "../components/homeQuestions.js";

import Tag from "../components/tag.js";

export default class Home extends Component{
    render(){
        return(
          <View style={styles.container}> 

                <Header
                backgroundColor='#083b66'
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff',
                onPress:() => this.props.navigation.toggleDrawer() }}
                centerComponent={{    text: 'GADGET CONSULTANCY',
                                      style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                rightComponent={{ icon: 'search', color: '#fff' ,
                onPress:() => this.props.navigation.navigate('filter')}}
                />

            <ScrollView> 
                
        {/*Recently viewed**/}
                <View style={{flex:1 }}>
                            {/*Heading**/}
                        <View style={styles.headingView} >
                        <Text style={styles.text} >RECENTLY VIEWED</Text>
                        </View>
                            {/*Read More**/}
                        <View style={styles.readMoreView} >
                            <TouchableOpacity>
                                <Text style={styles.readMoretext} >Read more</Text>
                            </TouchableOpacity>
                        </View>
                            {/*Question**/}
                            <View style={styles.questionView}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                            </View>   
                </View>

        {/*Recent Tags**/}
                <View style={{flex:1}}> 
                        {/*Heading**/}
                        <View style={styles.headingView} >
                        <Text style={styles.text} >RECENT TAGS</Text>
                        </View>
                        {/*Tags**/}
                        <View  style={styles.slider} >
                            <ScrollView horizontal={true} >
                                {/*Tag 1*/ }
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')}>
                                            <Tag name="Laptop"/>
                                </TouchableOpacity>
                                    {/*Tag 2*/ }
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')}>
                                            <Tag name="Mobile"/>
                                </TouchableOpacity>
                                    {/*Tag 3*/ }
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')}>
                                            <Tag name="Camera"/>
                                </TouchableOpacity>
                                    {/*Tag 4*/ }
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('detailQuestion')}>
                                            <Tag name="Headphones"/>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                </View>
                
        {/*Mostly viewed**/}
                <View style={{flex:1 }}>
                            {/*Heading**/}
                        <View style={styles.headingView} >
                        <Text style={styles.text} >MOSTLY VIEWED</Text>
                        </View>
                            {/*Read More**/}
                        <View style={styles.readMoreView} >
                            <TouchableOpacity>
                                <Text style={styles.readMoretext} >Read more</Text>
                            </TouchableOpacity>
                        </View>
                            {/*Question**/}
                            <View style={styles.questionView}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                            </View>   
                </View>

        {/*your Interest**/}
                <View style={{flex:1 }}>
                        {/*Heading**/}
                    <View style={styles.headingView} >
                      <Text style={styles.text} >YOUR INTEREST</Text>
                    </View>
                        {/*Read More**/}
                    <View style={styles.readMoreView} >
                        <TouchableOpacity>
                            <Text style={styles.readMoretext} >Read more</Text>
                        </TouchableOpacity>
                    </View>
                        {/*Question**/}
                        <View style={styles.questionView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detailQuestion') }>
                                    <HomeQuestions/>
                                </TouchableOpacity>
                        </View>   
             </View>

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
    text:{
        color:'#083b66',
        fontSize: 20,
        fontWeight: 'bold'
    },
    readMoretext:{
        color:'#083b66',
        fontSize: 19,
        fontWeight: 'bold',
        textDecorationLine:'underline'
    },
    headingView:{
        alignSelf:'flex-start',
        paddingHorizontal:12,
        paddingTop:12 ,
        marginTop:10
    },
    readMoreView:{
        alignSelf:'flex-end',
        paddingRight:8,
        marginTop:-24
    },
    questionView:{
        paddingTop:3
    },
    slider:{
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('15%'),
        borderWidth: wp('0.5%'),
        borderColor: '#fff', 
        borderLeftWidth:0,
        borderRightWidth:0
    }   
})
