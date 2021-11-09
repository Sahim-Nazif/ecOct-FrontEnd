
export const signUpReducer=(state={}, action)=>{

    switch (action.type) {
        case 'USER_SIGNUP_REQUEST':
            return {loading:true, }
    
        case 'USER_SIGNUP_SUCCESS':
            return {loading:false, success:true}

        case 'USER_SIGNUP_FAILED':
            return {loading:true, error:true}
        
        default: 
            return state
        }
}