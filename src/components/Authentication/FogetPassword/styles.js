import {StyleSheet} from "react-native";
import {myGray, myMediumBlue} from "../../../globals/styles";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'whitesmoke',
        padding: 20
    },
    title: {
        color: myMediumBlue,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: myMediumBlue,
        height: 45,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: myMediumBlue,
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        color: myGray,
    },
});
