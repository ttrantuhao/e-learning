export const login = (username, password) => {
    if(username === 'tuhao') {
        if(password === '12345') {
            return {status: 200, user: {username: 'hao', fullName: 'tran tu hao', token: 'abc'}}
        }
        return {status: 404, errorString: 'Wrong password!'}
    }
    return {status: 404, errorString: 'Username is not exist!'}
}
