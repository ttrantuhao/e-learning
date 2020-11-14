import {StyleSheet} from "react-native";
import {bgColor, myBlue, myLightWhite, mySilver} from "../../../globals/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: bgColor,
        padding: 20
    },
    title: {
        color: myBlue,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 60,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
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
        color: myLightWhite,
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        color: '#F44336',
    },
});
