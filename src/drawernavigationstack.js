import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import navigationDrawer from '../src/components/navigationDrawer'
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
        home: {screen: Home},
        detailQuestion: {screen: DetailQuestion},
        searchedQuestions: {screen: SearchedQuestions},
        viewProfile: {screen: ViewProfile},
        editProfile: {screen: EditProfile},
        searchHistory: {screen: SearchHistory},
        myActivities: {screen: MyActivities},
        postQuestion: {screen: PostQuestion},
        editQuestion: {screen: EditQuestion},
        filter: {screen: Filter},
        myQuestions: {screen: MyQuestions}
    },{
        contentComponent : navigationDrawer,
        initialRouteName: 'home',
        headerMode: 'none',
        navigationOptions : {
            headerVisible : false
        }
    }
)

export default createAppContainer(navigation)
