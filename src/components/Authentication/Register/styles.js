import {StyleSheet} from "react-native";
import {themeColor} from "../../../globals/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        padding: 20
    },
    title: {
        color: themeColor,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 60,
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: themeColor,
        height: 45,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: themeColor,
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        color: '#F44336',
    },
    loginText: {
        textAlign: 'center',
        color: themeColor
    }
});
