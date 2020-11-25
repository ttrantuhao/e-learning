const {Dimensions} = require("react-native");

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const screenKey = {
    //screen
    LoginScreen: 'login',
    RegisterScreen: 'register',
    VerifyEmailScreen: 'verifyEmail',
    ForgetPasswordScreen: 'forgetPassword',
    HomeScreen: 'home',
    BrowseScreen: 'browse',
    SettingScreen: 'setting',
    ProfileScreen: 'profile',
    CourseDetailScreen: 'courseDetail',
    SlashScreen: 'slashScreen',
    DownloadScreen: 'downloadScreen',
    ListPathScreen: 'listPath',
    ListAuthorScreen: 'listAuthor',
    ListCourse: 'listCourse',
    ListAllScreen: 'listAllScreen',

    //navigation
    HomeStack: 'homeStack',
    DownloadStack: 'downloadStack',
    BrowseStack: 'browseStack',
    SearchTab: 'searchTab',
    ListAllStack: 'listAllStack',
    ListCourseStack: 'listCourseStack',
    MainTab: 'mainTab'

}
