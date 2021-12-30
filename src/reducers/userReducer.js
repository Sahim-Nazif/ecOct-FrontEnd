
export const signUpReducer=(state={}, action)=>{

    switch (action.type) {
        case 'USER_SIGNUP_REQUEST':
            return {loading:true, }
    
        case 'USER_SIGNUP_SUCCESS':
            return {loading:false, success:true}

        case 'USER_SIGNUP_FAILED':
            return {loading:false, error:'Looks like this user already exists!'}
        
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
            return {loading:false, error:'Invalid credentials'}

        case 'USER_LOGOUT':
            return {...state}
        
        default: 
            return state
        }
}

export const updateReducer=(state={}, action)=>{

    switch (action.type) {
        case 'USER_UPDATE_REQUEST':
            return {loading:true, }
    
        case 'USER_UPDATE_SUCCESS':
            return {loading:false, success:true}

        case 'USER_UPDATE_FAILED':
            return {loading:false, error:'Looks like this user already exists!'}
        
        default: 
            return state
        }
}