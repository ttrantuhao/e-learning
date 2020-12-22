import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {myBlue} from "../../globals/styles";

const MyActivityIndicator = ({style}) => {
    return (
        <ActivityIndicator
            size="large"
            color={myBlue}
            style={{...style,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10
            }}
        />
    );
};

export default MyActivityIndicator;
