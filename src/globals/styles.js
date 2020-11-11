// export const myGray = "#7384B4"
// export const myLightBlue='#B2CAF7';
// export const myLightMediumBlue='#6799F5';
// export const myMediumBlue = '#6495ED';
// export const myGrayBlue='#546075';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";

export const myBlue='#0084BD';

//my theme
export const myWhite='#FEFEFE';
export const myLightWhite = '#E4E5E7';
export const bgColor=/*'#15161C'*/'black';
export const skillBtnColor = '#353A3E';
export const mySilver = '#B6B7B7';
export const cardColor='#1F242A';
export const navColor='#181B20';
export const MyDarkTheme = {
    ...DarkTheme,
    dark: false,//Whether this is a dark theme or a light theme
    colors: { //Various colors used by react navigation components:
        ...DarkTheme.colors,
        // primary: myWhite, //The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
        // background: bgColor, // The color of various backgrounds, such as background color for the screens.
        card: '#181B20', //The background color of card-like elements, such as headers, tab bars etc.
        // text: myWhite, // The text color of various elements.
        // border: myWhite, //The color of borders, e.g. header border, tab bar border etc.
        // notification: myWhite, //The color of Tab Navigator badge.
    },
};
export const MyLightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'rgb(255, 45, 85)',
        // background: 'rgb(242, 242, 242)',
        // card: 'rgb(255, 255, 255)',
        // text: 'rgb(28, 28, 30)',
        // border: 'rgb(199, 199, 204)',
        // notification: 'rgb(255, 69, 58)',
    },
};







