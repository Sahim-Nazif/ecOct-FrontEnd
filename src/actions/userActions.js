import axios from 'axios'


export const signUp=()=>dispatch=>{

    dispatch({type:'USER_SIGNUP_REQUEST'})

    axios.post('/api/users/signup')
         .then(res=> {
            dispatch({type:'USER_SIGNUP_SUCCESS'})
         }).catch(err=>console.log(err))

}