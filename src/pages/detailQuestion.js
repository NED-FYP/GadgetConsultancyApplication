import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Header} from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import KeyboardShift from "../components/keyboardShift.js";
import AsyncStorage from '@react-native-community/async-storage';

export default class DetailQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerbody: '',
      //tagname: [],
      questionList: [],
      qid: '',
      answerList: [],
      data:[],
      user_Id:''
  
    };

   }
  
  _getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }
  _getLocalStorage=()=>{
    const value = this._getData("users");
    value.then(resp=>{
        // console.log(resp);
        this.setState({data:resp});
        console.log(this.state.data.users.id)
        this.setState({user_Id:this.state.data.users.id})
        console.log(this.state.user_Id)
    })
  }
  componentDidMount(){
    this._getLocalStorage();
  //   console.log("here in didmoubnt")
  // console.log(this.state.data)
  // console.log("here in didmoubnt end")

  }
   componentDidUpdate(prevProps, prevState) {
    // Don't forget to compare states
    const {navigation} = this.props;
    const itemId = navigation.getParam('id');
    if (prevState && prevState.qid !== itemId  ) {
      this.setState({qid: itemId});
      console.log('in comp:');
      console.log(this.state.qid);
      fetch(`http://192.168.43.247:5000/api/question/${this.state.qid}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((res) => {
          //   console.log(res);
          this.setState({questionList: res});
          // console.log(this.state.questionList);
        });
      //  .catch((err) => console.log(err))
      fetch(
        `http://192.168.43.247:5000/api/answer/question/user/${this.state.qid}`,
        {
          method: 'GET',
        },
      )
        .then((response) => response.json())
        .then((res1) => {
          //   console.log(res1);
          this.setState({answerList: res1});
          console.log(this.state.answerList);
        })
        // .catch((err) => console.log(err))

        .done();
    }
  } //YEH RUN KAR K DEKHO, CONSOLE P 1 2 3 ATA HAI YA NAHI
  // componentDidMount(){
  //    console.log("didmount")
  // }
  // componentDidMount() {}
   OnSumit=()=>{
     console.log(this.state.answerbody)
     fetch('http://192.168.1.101:5000/api/answer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reply: this.state.answerbody,
        question_id: this.state.qid,
        user_id: this.state.user_Id
      }),
})
.then((response) => response.json())
.then((res) => {
  console.log(res)
})
this.setState({answerbody:''})
fetch(
  `http://192.168.1.101:5000/api/answer/question/user/${this.state.qid}`,
  {
    method: 'GET',
  },
)
  .then((response) => response.json())
  .then((res1) => {
    //   console.log(res1);
    this.setState({answerList: res1});
    console.log(this.state.answerList);
  })
  // .catch((err) => console.log(err))

  .done();
   }
  render() {
    //       const { navigation } = this.props;
    // const itemId=JSON.stringify(navigation.getParam('id'))
    // console.log(itemId)
    // // this.setState({qid:itemId})
    // console.log(this.state.qid)

    return (
      <KeyboardShift>
            {() => (
      <View style={styles.container}>
        <Header
          backgroundColor="#083b66"
          statusBarProps={{barStyle: 'light-content'}}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.toggleDrawer(),
          }}
          centerComponent={{
            text: 'DETAIL PAGE',
            style: {color: '#fff', fontWeight: 'bold', fontSize: 17},
          }}
          rightComponent={{
            icon: 'search',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('filter'),
          }}
        />
        <ScrollView>
          <View style={styles.rectangle}>
            <View style={styles.separator} />

            <View style={styles.questionTitleCont}>
              <Text style={styles.questionTitleText}>
              
                {this.state.questionList.question_title}
              </Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>#css</Text>
            </TouchableOpacity>

            <View style={styles.buttonTag}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>#java</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numberView}>
              <Text style={styles.numberText}>2</Text>
            </View>

            <View style={styles.likeIconCont}>
              <AntDesign name="like1" color="#083b66" size={22} />
            </View>

            <View style={styles.dislikeIconCont}>
              <AntDesign name="dislike1" color="#083b66" size={22} />
            </View>
          </View>
          

          <View style={styles.questionBody}>
            <Text style={styles.questionBodyText}>
              {this.state.questionList.question_body}
            </Text>
          </View>
{/** 
          <View style={styles.userView}>
            <View style={styles.userIconView}>
              <FontAwesome5 name="user-alt" color="#757575" size={28} />
            </View>

            <View style={styles.userNameView}>
              <Text style={styles.userNameText}>Ramsha Khan</Text>
            </View>

            <View style={styles.askedView}>
              <Text style={styles.askedText}>asked</Text>
            </View>

            <View style={styles.timeView}>
              <Text style={styles.timeText}>2 hours ago</Text>
            </View>
          </View>
          */}
          {this.state.answerList.map((item) => {
            return (
              <View>
                <View style={styles.answerHeadingView}>
                  <Text style={styles.answerHeadingText}> {item.id} Answer </Text>
                </View>

                <View style={styles.answerBodyRectangle}>
                  <View style={styles.answerBodyseparator} />

                  <View style={styles.answerBodyView}>
                    <Text style={styles.answerBodyText}>{item.reply}</Text>
                  </View>

{/** 
                  <View style={styles.iconContainerView}>
                    <View style={styles.likeIconCont}>
                      <AntDesign name="like1" color="#083b66" size={22} />
                    </View>
                    <View style={styles.numberView2}>
                      <Text style={styles.numberText}>2</Text>
                    </View>
                    <View style={styles.dislikeIconCont}>
                      <AntDesign name="dislike1" color="#083b66" size={22} />
                    </View>
                  </View>
*/}
                </View>
              </View>
            );
          })}
{/** 
          <View style={styles.userView}>
            <View style={styles.userIconView}>
              <FontAwesome5 name="user-alt" color="#757575" size={28} />
            </View>

            <View style={styles.userNameView}>
              <Text style={styles.userNameText}>Saniya Abdul Rehman</Text>
            </View>

            <View style={styles.askedView}>
              <Text style={styles.askedText}>answered</Text>
            </View>

            <View style={styles.timeView}>
              <Text style={styles.timeText}>2 hours ago</Text>
            </View>
          </View>
*/}

          <View style={styles.yourAnswerHeadingView}>
            <Text style={styles.yourAnswerHeadingText}> Your Answer</Text>
          </View>

          <View style={styles.yourAnswerBodyView}>
            <TextInput
              style={styles.bodyInputBox}
              multiline
              //numberOfLines={4}
              placeholder=" Enter your answer....."
              placeholderTextColor="#C1C0C8"
              value={this.state.answerbody}
              onChangeText = { (text) => this.setState({answerbody:text}) }
              //ref={(input) => { this.secondTextInput = input; }}
              returnKeyType={'done'}
              onSubmitEditing={this.ObSubmit}
              blurOnSubmit
            />

            {/** 
                   <Text style={styles.questionBodyText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                     </Text>
                     */}
          </View>

          <View style={styles.postYourAnswerView}>
            <TouchableOpacity
              style={styles.postYourAnswerButton}
              onPress={() => this.OnSumit()}>
              <Text style={styles.answerButtonText}>Post Your Answer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

)}
</KeyboardShift>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  rectangle: {
    width: wp('100%'),
    height: hp('12%'),
    borderWidth: wp('0.5%'),
    borderColor: '#bdbdbd',
    backgroundColor: '#fff',
  },
  separator: {
    height: hp('11.5%'),
    width: wp('0.7%'),
    backgroundColor: '#bdbdbd',
    position: 'relative',
    right: wp('-20%'),
  },
  questionTitleCont: {
    position: 'relative',
    right: wp('-24%'),
    top: hp('-11%'),
  },
  questionTitleText: {
    color: '#083b66',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#083b66',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#CDD7E0',
    borderRadius: 5,
    position: 'relative',
    right: wp('-24%'),
    top: hp('-8.5%'),
    textAlign: 'center',
    width: wp('12%'),
  },
  timeCont: {
    position: 'relative',
    right: wp('-24%'),
    top: hp('-9.1%'),
  },
  timeAndUserText: {
    color: '#fff',
    fontSize: 14,
  },
  numberView: {
    position: 'relative',
    left: wp('7.7%'),
    top: hp('-15%'),
  },
  numberText: {
    color: '#000',
    fontSize: 14,
  },
  likeIconCont: {
    position: 'relative',
    left: wp('6%'),
    top: hp('-21%'),
  },
  dislikeIconCont: {
    position: 'relative',
    left: wp('6%'),
    top: hp('-18%'),
  },
  buttonTag: {
    position: 'relative',
    right: wp('-15%'),
    top: hp('-2.3%'),
  },
  questionBody: {
    width: wp('97%'),
    borderWidth: wp('0.5%'),
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginTop: 6,
    alignSelf: 'center',
    textAlign: 'center',
  },
  questionBodyText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'left',
  },
  userView: {
    width: wp('100%'),
    height: hp('6%'),
    borderWidth: wp('0.5%'),
    borderColor: '#CDD7E0',
    backgroundColor: '#CDD7E0',
    marginTop: 6,
  },
  userIconView: {
    position: 'relative',
    left: wp('5%'),
    top: hp('0.8%'),
  },
  userNameView: {
    position: 'relative',
    left: wp('15%'),
    top: hp('-4%'),
  },
  userNameText: {
    color: '#757575',
    fontSize: 14,
  },
  editView: {
    position: 'relative',
    left: wp('36%'),
    top: hp('-6.5%'),
  },
  editText: {
    color: '#0069c0',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  askedView: {
    position: 'relative',
    right: wp('-80%'),
    top: hp('-6.5%'),
  },
  askedText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeView: {
    position: 'relative',
    right: wp('-78%'),
    top: hp('-6%'),
  },
  timeText: {
    color: '#757575',
    fontSize: 13,
  },
  answerHeadingView: {
    position: 'relative',
    right: wp('-4%'),
    backgroundColor: '#fff',
    marginTop: 4,
  },
  answerHeadingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerBodyRectangle: {
    width: wp('100%'),
    height: hp('27%'),
    borderWidth: wp('0.5%'),
    borderColor: '#bdbdbd',
    backgroundColor: '#fff',
    marginTop: 4,
  },
  answerBodyView: {
    width: wp('78%'),
    borderWidth: wp('0.5%'),
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginTop: 4,
    position: 'relative',
    right: wp('-22%'),
    top: hp('-26%'),
  },
  answerBodyText: {
    color: '#000',
    fontSize: 16,
    width: wp('70%'),
  },
  iconContainerView: {
    position: 'relative',
    left: wp('1%'),
    top: hp('-25%'),
  },
  numberView2: {
    position: 'relative',
    left: wp('7.7%'),
    top: hp('-19.5%'),
  },
  answerBodyseparator: {
    height: hp('26.5%'),
    width: wp('0.7%'),
    backgroundColor: '#bdbdbd',
    position: 'relative',
    right: wp('-20%'),
  },
  yourAnswerHeadingView: {
    position: 'relative',
    right: wp('-4%'),
    backgroundColor: '#fff',
    marginTop: 4,
  },
  yourAnswerHeadingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yourAnswerBodyView: {
    //width: wp('95%'),
    //borderWidth: wp('0.5%'),
    //borderColor: '#bdbdbd',
    //backgroundColor: '#fff',
    marginTop: 4,
    //alignSelf: 'center',
    //textAlign: 'center',
    paddingHorizontal: 8,
  },
  postYourAnswerButton: {
    width: wp('70%'),
    height: hp('6.5%'),
    backgroundColor: '#083b66',
    justifyContent: 'center',
  },
  postYourAnswerView: {
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 8,
  },
  answerButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  bodyInputBox: {
    borderWidth: wp('0.5%'),
    borderColor: '#bdbdbd',
    width: wp('95%'),
    height: hp('20%'),
    //borderWidth: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    textAlignVertical: 'top',
    paddingVertical:1
    
  },
});
