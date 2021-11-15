
export const signUpReducer=(state={}, action)=>{

    switch (action.type) {
        case 'USER_SIGNUP_REQUEST':
            return {loading:true, }
    
        case 'USER_SIGNUP_SUCCESS':
            return {loading:false, success:true}

        case 'USER_SIGNUP_FAILED':
            return {loading:true, error:'Looks like this user already exists!'}
        
        default: 
            return state
        }
}

export const loginReducer=(state={}, action)=>{

    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {loading:true, }
    
        case 'USER_LOGIN_SUCCESS':
            return {loading:false, success:true}

        case 'USER_LOGIN_FAILED':
            return {loading:true, error:'Invalid credentials'}
        
        default: 
            return state
        }
}