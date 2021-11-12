import axios from 'axios'
import { useReducer } from 'react'


export const signUpAction=(user)=>dispatch=>{

    dispatch({type:'USER_SIGNUP_REQUEST'})

    axios.post('/api/user/signup', user)
         .then(res=> {
            dispatch({type:'USER_SIGNUP_SUCCESS'})
         }).catch(err=>{console.log(err)
        
            dispatch({type:'USER_SIGNUP_FAILED'})
        })

}