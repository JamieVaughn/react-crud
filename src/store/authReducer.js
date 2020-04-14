const initState = {
    authError: null
} 
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login successful')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout successful')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup successful')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error', action.err)
            return {
                ...state,
                authError: action.err
            }
        default:
            return state
    }
}

export default authReducer