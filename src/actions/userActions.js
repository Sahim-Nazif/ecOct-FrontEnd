import axios from 'axios'
import { useReducer } from 'react'


export const signUpAction=(user)=>dispatch=>{

    dispatch({type:'USER_SIGNUP_REQUEST'})

    axios.post('/api/user/signup', user)
         .then(res=> {
            dispatch({type:'USER_SIGNUP_SUCCESS'})
         }).catch(error=>{dispatch({type:'USER_SIGNUP_FAILED', payload:error})

         console.log(error)
            
        })

}