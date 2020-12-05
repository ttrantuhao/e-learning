import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {myBlue} from "../../globals/styles";

const MyActivityIndicator = () => {
    return (
        <ActivityIndicator
            size="large"
            color={myBlue}
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        />
    );
};

export default MyActivityIndicator;
