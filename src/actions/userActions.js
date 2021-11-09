import axios from 'axios'


export const signUpAction=()=>dispatch=>{

    dispatch({type:'USER_SIGNUP_REQUEST'})

    axios.post('/api/users/signup')
         .then(res=> {
            dispatch({type:'USER_SIGNUP_SUCCESS'})
         }).catch(err=>{console.log(err)
        
            dispatch({type:'USER_SIGNUP_FAILED'})
        })

}