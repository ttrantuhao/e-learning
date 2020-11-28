import {StyleSheet} from "react-native";
import {bgColor, myBlue, myLightWhite} from "../../../globals/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        padding: 20,
        paddingVertical: 50
    },
    title: {
        color: myBlue,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 60,
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: myBlue,
        height: 45,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        color: '#F44336',
    },
    loginText: {
        textAlign: 'center',
        color: myBlue
    }
});
