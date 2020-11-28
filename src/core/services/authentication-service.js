export const registerAccount = (username, email, phoneNumber, password, confirmPassword) => {
    if(email === 'tuhao99@gmail.com' || phoneNumber === '0932648392') {
        return {status: 400, errorString: 'Email or phone number is exist!'}
    }
    return {status: 200}
}

export const sendActivateEmail = (email) => {
    return {status: 200}
}

export const activateEmail = (email) => {
    return {status: 200}
}

export const login = (email, password) => {
    // if(email === 'tuhao99@gmail.com') {
    //     if(password === '12345') {
    //         return {
    //             status: 200,
    //             userInfo: {
    //                 id: '123',
    //                 email: 'tuhao99@gmail.com',
    //                 name: 'tran tu hao',
    //                 phone: '0932648392',
    //                 avatar: '',
    //                 type: '',
    //             },
    //             token: 'abc'
    //         }
    //     }
    //     return {status: 404, errorString: 'Wrong password!'}
    // }
    // return {status: 404, errorString: 'Username is not exist!'}
    return {
        status: 200,
        userInfo: {
            id: '123',
            email: 'tuhao99@gmail.com',
            name: 'tran tu hao',
            phone: '0932648392',
            avatar: '',
            type: '',
        },
        token: 'abc'
    }
}


export const verifyAccount = (email, verifyCode) => {
    if(verifyCode === '11111') {
        return {status: 200}
    }
    return {status: 400, errorString: 'Invalid code'}
}

export const resetPassword = (email) => {
    if(email === 'tuhao99@gmail.com') {
        return {status: 200}
    }
    return {status: 404, errorString: 'user does not exist'}
}
