import React from 'react';
import {Text} from 'react-native';

const Error = ({message}) => {
    return (
        <Text
            style={{
                marginTop: 0,
                color: '#F44336',
                textAlign: 'center'
            }}
        >
            {message}
        </Text>
    );
};

export default Error;
