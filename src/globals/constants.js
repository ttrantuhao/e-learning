const {Dimensions} = require("react-native");

export const ANDROID_CLIENT_ID = "917292171760-dff6mnok3ldka3o1bkp9kks285g74rhv.apps.googleusercontent.com";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const welcomeTitle = 'Welcome to E-learning';
export const welcomeContent = 'With E-learning, you can build and apply skills in top technologies. You have free ' +
    'access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.';
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
    SearchScreen: 'searchScreen',
    ListLesson: 'ListLesson',
    ListComment: 'listComment',
    ListCourseSearch: 'listCourseSearch',

    //navigation
    HomeStack: 'homeStack',
    DownloadStack: 'downloadStack',
    BrowseStack: 'browseStack',
    SearchStack: 'searchStack',
    SearchTab: 'searchTab',
    ListAllStack: 'listAllStack',
    ListCourseStack: 'listCourseStack',
    MainTab: 'mainTab'

}

export const Language = {
    en: {
        type: 'en',//Whether this is a dark theme or a light theme
        student: 'student',
        author: 'author',
        seeAll: 'see all'
    },
    vn: {
        type: 'vn',
        student: 'học sinh',
        author: 'giảng viên',
        seeAll: 'xem thêm'
    }
}
