const {Dimensions} = require("react-native");

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const screenKey = {
    LoginScreen: 'login',
    RegisterScreen: 'register',
    VerifyPasswordScreen: 'verifyPassword',
    ForgetPasswordScreen: 'forgetPassword',
    HomeStack: 'homeStack',
    DownloadStack: 'downloadStack',
    BrowseStack: 'browseStack',
    SearchTab: 'searchTab',
    HomeScreen: 'home',
    SettingScreen: 'setting',
    ProfileScreen: 'profile',
    CourseDetailScreen: 'courseDetail',
    SlashScreen: 'SlashScreen'
}
