import React, { Component } from 'react';
import { StyleSheet,  View, Text, TouchableOpacity,Image ,TextInput, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen' ;
import { Icon } from 'react-native-elements'
import KeyboardShift from "../components/keyboardShift.js";

export default class Filter extends Component{
    
    constructor(props) {
        super(props);

        this.state = { selectedButton: null };
        this.selectionOnPress = this.selectionOnPress.bind(this);

        this.state = { viewSelectedButton: null };
        this.viewSelectionOnPress = this.viewSelectionOnPress.bind(this);
    }
    
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }

    viewSelectionOnPress(userType) {
        this.setState({ viewSelectedButton: userType });
    }

    onFocus() {
        this.setState({
           borderColor: '#426594',
           
        })
    }
    onBlur() {
        this.setState({
          borderColor: '#426594',
         
        })
    }

    render(){
        return(
            <KeyboardShift>
              {() => (
                <View style={styles.container}> 
                    <Header
                    backgroundColor='#083b66'
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={{ icon: 'menu', color: '#fff' ,onPress:() => this.props.navigation.toggleDrawer() }}
                    centerComponent={{    text: 'FILTER', style: { color: '#fff' , fontWeight:'bold' , fontSize: 17} }}
                    />
                      <ScrollView>
                        <View style={styles.headingView} >
                            <Text style={styles.text} >Sort</Text>
                        </View>

                        <View style={styles.mostLikedView} >
                            <TouchableOpacity  style={{
                                width:wp('30%'),
                                height: hp('10%'),
                                borderRadius: 5,
                                borderColor:'grey',
                                borderWidth:2,
                                paddingVertical : 22,
                                backgroundColor:
                                    this.state.selectedButton === "BASIC"
                                    ? "#CDD7E0"
                                    : "#fff",
                                borderColor:
                                    this.state.selectedButton === "BASIC"
                                ? "#083b66"
                                : "grey",
                                }}
                                onPress={() => this.selectionOnPress("BASIC")}
                            >
                                <Text style={{fontSize: 16,
                                            fontWeight: 'bold',
                                            color: this.state.selectedButton === "BASIC"
                                                    ? "#083b66"
                                                    : "grey",
                                            textAlign:'center',
                                            }}> Most Liked
                                </Text>
                            </TouchableOpacity>
                        </View>
                
                
                        <View style={styles.mostViewedView} >
                            <TouchableOpacity style={{
                                width:wp('30%'),
                                height: hp('10%'),
                                borderRadius: 5,
                                borderColor:'grey',
                                borderWidth:2,
                                paddingVertical : 22,
                                backgroundColor:
                                    this.state.selectedButton === "INTERMEDIATE"
                                    ? "#CDD7E0"
                                    : "#fff",
                                borderColor:
                                    this.state.selectedButton === "INTERMEDIATE"
                                    ? "#083b66"
                                    : "grey",
                                }}
                                onPress={() => this.selectionOnPress("INTERMEDIATE")}
                            >
                                <Text style={{fontSize: 16,
                                            fontWeight: 'bold',
                                            color: this.state.selectedButton === "INTERMEDIATE"
                                                    ? "#083b66"
                                                    : "grey",
                                            textAlign:'center',
                                            }}>Most Viewed
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.mostRecentView} >
                            <TouchableOpacity style={{
                                width:wp('30%'),
                                height: hp('10%'),
                                borderRadius: 5,
                                borderColor:'grey',
                                borderWidth:2,
                                paddingVertical : 22,
                                backgroundColor:
                                    this.state.selectedButton === "ADVANCED"
                                        ? "#CDD7E0"
                                        : "#fff",
                                        
                                borderColor:
                                    this.state.selectedButton === "ADVANCED"
                                        ? "#083b66"
                                        : "grey",
                                }}
                                onPress={() => this.selectionOnPress("ADVANCED")}
                            >
                                <Text style={{fontSize: 16,
                                                fontWeight: 'bold',
                                                color: this.state.selectedButton === "ADVANCED"
                                                ? "#083b66"
                                                : "grey",
                                                textAlign:'center',
                                            }}>Most Recent
                                </Text>
                            </TouchableOpacity>
                        </View>

                    <View style={styles.separator}/>

                        <View style={styles.viewHeadingView} >
                            <Text style={styles.text} >View</Text>
                        </View>

                        <View style={styles.galleryView} >
                            <TouchableOpacity  style={{
                                width:wp('45%'),
                                height: hp('10%'),
                                borderRadius: 5,
                                borderColor:'grey',
                                borderWidth:2,
                                paddingVertical : 22,
                                backgroundColor:
                                    this.state.viewSelectedButton === "BASIC"
                                    ? "#CDD7E0"
                                    : "#fff",
                                borderColor:
                                    this.state.viewSelectedButton === "BASIC"
                                ? "#083b66"
                                : "grey",
                                }}
                                onPress={() => this.viewSelectionOnPress("BASIC")}
                            >
                                <Text style={{fontSize: 16,
                                            fontWeight: 'bold',
                                            color: this.state.viewSelectedButton === "BASIC"
                                                    ? "#083b66"
                                                    : "grey",
                                            textAlign:'center',
                                            marginRight:-5
                                            }}>Gallery
                                </Text>

                                <View style={{marginLeft:-80, marginTop:-21 }}>
                                    <Icon
                                        name='image' 
                                        color= {this.state.viewSelectedButton === "BASIC"
                                                ? "#083b66"
                                                : "grey"
                                            }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.listView} >
                            <TouchableOpacity  style={{
                                width:wp('45%'),
                                height: hp('10%'),
                                borderRadius: 5,
                                borderColor:'grey',
                                borderWidth:2,
                                paddingVertical : 22,
                                backgroundColor:
                                    this.state.viewSelectedButton === "INTERMEDIATE"
                                    ? "#CDD7E0"
                                    : "#fff",
                                borderColor:
                                    this.state.viewSelectedButton === "INTERMEDIATE"
                                    ? "#083b66"
                                    : "grey",
                                }}
                                onPress={() => this.viewSelectionOnPress("INTERMEDIATE")}
                            >
                                <Text style={{fontSize: 16,
                                            fontWeight: 'bold',
                                            color: this.state.viewSelectedButton === "INTERMEDIATE"
                                                    ? "#083b66"
                                                    : "grey",
                                            textAlign:'center',
                                            }}>List
                                </Text>

                                <View style={{ marginLeft:-65, marginTop:-21 }}>
                                    <Icon
                                        name='list' 
                                        color= {this.state.viewSelectedButton === "INTERMEDIATE"
                                                ? "#083b66"
                                                : "grey"
                                                }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                    <View style={styles.separatorTwo}/>

                        <View style={styles.tagHeadingView} >
                            <Text style={styles.text} >Tag</Text>
                        </View>

                        <View style={styles.tagInputBoxView}>
                            <TextInput 
                                style={{
                                borderColor: this.state.borderColor ? 
                                "#083b66"
                                : "grey",                       
                                width: wp('95%'),
                                height: hp('6%'),
                                borderWidth: 1.5,
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                fontSize:16,
                                paddingTop:10   
                                }}
                                multiline
                                placeholder="Search By Tag" 
                                placeholderTextColor="grey"
                                textAlign='center'
                                returnKeyType = { "done" }
                                onSubmitEditing={this.handleTitleInputSubmit}
                                blurOnSubmit
                                onBlur={ () => this.onBlur() }
                                onFocus={ () => this.onFocus() }
                            />
                        </View>

                    <View style={styles.separatorThree}/>
            
                        <View style={styles.titleHeadingView} >
                            <Text style={styles.text} >Title</Text>
                        </View>
            
                        <View style={styles.titleInputBoxView}>
                            < TextInput 
                                style={{
                                borderColor: this.state.borderColor ? 
                                "#083b66"
                                : "grey",
                                borderWidth: this.state.borderWidth,                      
                                width: wp('95%'),
                                height: hp('6%'),
                                borderWidth: 1.5,
                                borderRadius: 5,
                                paddingHorizontal: 10,
                                paddingTop:10,
                                fontSize:16,
                                }}
                                multiline
                                placeholder="Search By Title" 
                                placeholderTextColor="grey"
                                textAlign='center'
                                returnKeyType = { "done" }
                                onSubmitEditing={this.handleTitleInputSubmit}
                                blurOnSubmit
                                onBlur={ () => this.onBlur() }
                                onFocus={ () => this.onFocus() }
                            />
                        </View>
            
                    <View style={styles.separatorFour}/>
                    </ScrollView>
                        <View style={styles.filterButtonView} >
                        <TouchableOpacity style={styles.filterButton}
                                                onPress={() =>
                                                this.props.navigation.navigate('searchedQuestions')
                                                }>
                            <Text style={styles.buttonText}>FILTER</Text>
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
    text:{
        color:'#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headingView:{ 
        marginTop:10,
        marginBottom:5,
        paddingHorizontal:12,
        top:hp('1%')
    },
    mostLikedView:{
        paddingHorizontal:12 ,
        top:hp('2%'), 
        
    },
    mostViewedView:{
        left:wp('35%'),
        top:hp('-8%')  
    },
    mostRecentView:{
        top:hp('-18%'),
        left:wp('67%'),  
    },
    separator:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#bdbdbd',
        top:hp('-14')
    },
     viewHeadingView:{
        paddingHorizontal:12,
        top:hp('-12.5%')
    },
    galleryView:{
        paddingHorizontal:12 , 
        top:hp('-10%')
    },
    listView:{
        left:wp('50%'),
        top:hp('-20%')
    },
    separatorTwo:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#bdbdbd',
        top:hp('-16%')
    },
    tagHeadingView:{
        paddingHorizontal:12,
        top:hp('-14%')  
    },
    tagInputBoxView:{
        paddingHorizontal:12,
        top:hp('-11%')
    },
    separatorThree:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#bdbdbd',
        top:hp('-6.5%')
    },
    titleHeadingView:{
        paddingHorizontal:12,
        top:hp('-4%') 
    },
    titleInputBoxView:{
        paddingHorizontal:12,
        top:hp('-1%')
    },
    separatorFour:{
        width: wp('100%'),
        borderWidth:1,
        borderColor:'#bdbdbd',
        bottom:hp('-3.5%')
    },
    filterButtonView:{
        flex:1,
        justifyContent:'flex-end',
        alignSelf:'center',
        paddingBottom:4  
    },
    filterButton:{
        width:wp('90%'),
        height: hp('6%'),
        backgroundColor: '#083b66',
        paddingTop:10
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
      
    }, 
});