import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image ,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import KeyboardShift from "../components/keyboardShift.js";

export default class EditQuestion extends Component{

    constructor(props) {
        super(props);
        this.state = { titletext: 'Lorem Ipsum is simply dummy text',
                       tagtext: 'Lorem Ipsum is simply dummy text',
                       bodytext:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                     };
    }
    
    render(){
        return(
            <KeyboardShift>
              {() => (
                <View style={styles.container}> 
                    <Header
                        backgroundColor='#007c91'
                        statusBarProps={{ barStyle: 'light-content' }}
                        leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer() }}
                        centerComponent={{    text: 'EDIT QUESTION', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                        rightComponent={{ icon: 'search', color: '#fff' ,
                        onPress:() => this.props.navigation.navigate('filter')}}
                    />

                    <View style={styles.editDailogBoxView} >
                        <Text style={styles.editDailogBoxText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </Text>
                    </View>
           
            
                    <View style={styles.headingView} >
                        <Text style={styles.text} >Title</Text>
                        <View style={styles.inputBoxView}>
                            <TextInput style={styles.inputBox}
                                multiline
                                onChangeText={(titletext) => this.setState({titletext})}
                                value={this.state.titletext}
                                returnKeyType = { "next" }
                                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                blurOnSubmit={false}
                            />
                        </View>
                    </View>

                    <View style={styles.headingView} >
                        <Text style={styles.text} >Body</Text>
                        <View style={styles.inputBoxView}>
                            <TextInput style={styles.bodyInputBox}
                                multiline
                                numberOfLines={4}
                                onChangeText={(bodytext) => this.setState({bodytext})}
                                value={this.state.bodytext}
                                ref={(input) => { this.secondTextInput = input; }}
                                returnKeyType = { "next" }
                                onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            />
                        </View>
                    </View>

                    <View style={styles.headingView} >
                        <Text style={styles.text} >Tag</Text>
                        <View style={styles.inputBoxView}>
                            <TextInput style={styles.inputBox}
                                multiline
                                onChangeText={(tagtext) => this.setState({tagtext})}
                                value={this.state.tagtext}
                                ref={(input) => { this.thirdTextInput = input; }}
                                returnKeyType = { "done" }
                                onSubmitEditing={this.handleTitleInputSubmit}
                                blurOnSubmit
                            />
                        </View>
                    </View>

                    <View style={styles.editYourQuestionView} >
                        <TouchableOpacity style={styles.editYourQuestionButton}
                                onPress={() =>
                                this.props.navigation.navigate('myQuestions')}>
                            <Text style={styles.buttonText}>Save Edits</Text>
                        </TouchableOpacity>
                    </View>

                </View>
              )}
            </KeyboardShift>  
        )
    }
}
        
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Imagecontainer:{
        alignSelf:'center'
    },
    text:{
        color:'#000',
        fontSize: 20,
        fontWeight: '500'
    },
    headingView:{
        position : "relative",
        right: wp('-3%') , 
        bottom: hp('-1%'),
    },
    inputBox:{
        width: wp('95%'),
        height: hp('5%'),
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize:16,
        color:'#000', 
    },
    inputBoxView:{
        marginBottom:15
    },
    bodyInputBox:{
        width: wp('95%'),
        height: hp('20%'),
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize:16,
        color:'#000', 
    },
    editYourQuestionButton:{
        width:wp('45%'),
        height: hp('5%'),
        backgroundColor: '#007c91',
        borderRadius: 5,
        paddingVertical : 8,
    },
    editYourQuestionView:{
        marginVertical:10,
        paddingHorizontal:10  
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    editDailogBoxView:{
        width: wp('80%'),
        borderWidth: wp('0.5%'),
        borderColor: '#007c91',
        marginVertical:20,
        marginTop:12,
        alignSelf:'center' ,
        paddingHorizontal: 8
    },
    editDailogBoxText:{
        color: "grey",
        fontSize:16, 
    },
});