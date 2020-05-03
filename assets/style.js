import { StyleSheet} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen' ;

export const styler = StyleSheet.create({
    logoView:{ 
        alignItems: 'center',
        justifyContent:'flex-start',
        paddingVertical:30
      },
      textInputView:{
        alignItems: 'center',
      },
      inputBox:{
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#aeaeae',
        borderRadius: 20,
        fontSize:16,
        color:'black',
        marginVertical: 10,
        width: wp('82%'),
        height: hp('6%'), 
        paddingHorizontal: 16,   
      },
      buttonView:{
        alignItems: 'center',
      },
      text:{
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
      },
      button:{
        backgroundColor: '#083b66',
        borderRadius: 20,
        width: wp('82%'),
        height: hp('6%'),
        justifyContent:'center',
        marginVertical: 25,
      },
      signupTextView:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:12
      },
      signupText:{
        color: "#aeaeae",
        fontSize:16,
      },
      linkButton:{
        color:'#083b66',
        fontSize: 16,
        fontWeight: '400',
      },
    })