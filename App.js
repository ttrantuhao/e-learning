import React from 'react';
import {StatusBar} from 'react-native';
import {MyDarkTheme} from "./src/globals/styles";
import 'react-native-gesture-handler'
import RootStack from "./src/Navigation/RootStack";
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(MyDarkTheme.colors.card);

    return (
        <NavigationContainer theme={MyDarkTheme}>
            <MenuProvider>
                <RootStack/>
            </MenuProvider>
        </NavigationContainer>
    );
}


// import React from 'react';
// import {MenuProvider} from 'react-native-popup-menu';
// import {
//     Menu,
//     MenuOptions,
//     MenuOption,
//     MenuTrigger,
// } from 'react-native-popup-menu';
// import {Text, View} from "react-native";
// import {cardColor, MyDarkTheme, myWhite} from "./src/globals/styles";
// import RootStack from "./src/Navigation/RootStack";
// import {NavigationContainer} from '@react-navigation/native';
// export const App = () => (
//     <MenuProvider>
//         <NavigationContainer theme={MyDarkTheme}>
//             <YourComponent/>
//         </NavigationContainer>
//     </MenuProvider>
// );
//
// // somewhere in your app
//
// export default App;
//
// export const YourComponent = () => (
//     <View>
//         <Text>Hello world!</Text>
//         <Menu>
//             <MenuTrigger text='Select action'/>
//             <MenuOptions customStyles={{
//                 optionsWrapper: {
//                     backgroundColor: cardColor,
//                 },
//                 optionText: {
//                     color: myWhite,
//                     fontSize: 16,
//                     margin: 15
//                 }
//             }}>
//                 <MenuOption onSelect={() => alert(`Save`)} text='Profile'/>
//                 <MenuOption onSelect={() => alert(`Not called`)} text='Setting'/>
//             </MenuOptions>
//         </Menu>
//     </View>
// );
