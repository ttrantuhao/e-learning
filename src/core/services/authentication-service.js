export const login = (email, password) => {
    if(email === 'tuhao99@gmail.com') {
        if(password === '12345') {
            return {status: 200, user: {email: 'tuhao99@gmail.com', fullName: 'tran tu hao', token: 'abc'}}
        }
        return {status: 404, errorString: 'Wrong password!'}
    }
    return {status: 404, errorString: 'Username is not exist!'}
}

export const registerAccount = (email, password) => {
    // if(email === 'tuhao99@gmail.com') {
    //     return {status: 409, errorString: 'Email is exist!'}
    // }
    return {status: 200}
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
