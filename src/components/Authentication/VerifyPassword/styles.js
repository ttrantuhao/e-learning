import {StyleSheet} from "react-native";
import {bgColor, myBlue, myGray, myLightWhite, myMediumBlue} from "../../../globals/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: bgColor,
        padding: 20,
        marginTop: 30
    },
    title: {
        color: myBlue,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
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
        color: myBlue,
    },
});
