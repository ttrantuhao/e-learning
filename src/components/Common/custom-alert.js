import React, {useContext} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Modal from "react-native-modal";
import {ThemeContext} from "../../provider/theme-provider";

const CustomAlert = ({visible, title, message, onOk, onCancel}) => {
    const {theme} = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.card,
            borderRadius: 5,
            padding: 15,
            width: '80%',
            alignSelf: 'center'
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.text,
            textAlign: 'justify'
        },
        message: {
            fontSize: 14,
            color: theme.colors.text,
            marginTop: 15
        }
    })
    return (
        <Modal isVisible={visible}
               backdropColor={theme.colors.text}
               backdropOpacity={0.5}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity style={{alignSelf: 'flex-end', paddingRight: 10}} onPress={onOk}>
                    <Text style={{fontSize: 18, color: theme.colors.primary, marginTop: 15}}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default CustomAlert;
