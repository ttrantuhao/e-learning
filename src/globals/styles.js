// export const myGray = "#7384B4"
// export const myLightBlue='#B2CAF7';
// export const myLightMediumBlue='#6799F5';
// export const myMediumBlue = '#6495ED';
// export const myGrayBlue='#546075';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";

export const myBlue = '#0084BD';
//my theme
export const myWhite = '#FEFEFE';
export const myLightWhite = '#E4E5E7';
export const bgColor =/*'#15161C'*/'black';
export const skillBtnColor = '#353A3E';
export const mySilver = "#B6B7B7";
export const cardColor = '#1F242A';
export const navColor = '#181B20';

export const MyTheme = {
    dark: {
        dark: true,//Whether this is a dark theme or a light theme
        colors: { //Various colors used by react navigation components:
            // primary: myWhite, //The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
            // background: bgColor, // The color of various backgrounds, such as background color for the screens.
            // card: The background color of card-like elements, such as headers, tab bars etc.
            // text: myWhite, // The text color of various elements.
            // border: myWhite, //The color of borders, e.g. header border, tab bar border etc.
            // notification: myWhite, //The color of Tab Navigator badge.

            primary: /*'rgb(10, 132, 255)'*/myBlue,
            background: 'rgb(1, 1, 1)',
            card: '#1F242A',
            sectionItem: '#1F242A',
            // card: 'rgb(18, 18, 18)',
            text: 'rgb(252,252,255)',
            subtext: mySilver,
            border: 'rgb(39, 39, 41)',
            notification: 'rgb(255, 69, 58)',
            smallBtn: '#353A3E'
        },
        barStyle: 'light-content',
    },
    light: {
        dark: false,
        colors: {
            primary: /*'rgb(0, 122, 255)'*/myBlue,
            background: 'rgb(242, 242, 242)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            subtext: "#B6B7B7",
            border: 'rgb(216, 216, 216)',
            notification: 'rgb(255, 59, 48)',
            smallBtn: '#353A3E',
        },
        barStyle: 'dark-content',
    }
}







