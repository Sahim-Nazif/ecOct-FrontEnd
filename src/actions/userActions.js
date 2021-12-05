import axios from 'axios'



export const signUpAction=(user)=>dispatch=>{

    dispatch({type:'USER_SIGNUP_REQUEST'})

    axios.post('/api/user/signup', user)
         .then(res=> {
            dispatch({type:'USER_SIGNUP_SUCCESS'})
         }).catch(error=>{dispatch({type:'USER_SIGNUP_FAILED', payload:error})

         console.log(error)
            
        })

}

export const loginAction=(user)=>dispatch=>{

   dispatch({type:'USER_LOGIN_REQUEST'})
   
   axios.post('/api/user/login', user)
        .then(res=> {
           dispatch({type:'USER_LOGIN_SUCCESS'})

           localStorage.setItem('currentUser', JSON.stringify(res.data))

            window.location.href='/';

        }).catch(error=>{dispatch({type:'USER_LOGIN_FAILED', payload:error})

        console.log(error)
           
       })

}

export const logout=()=>dispatch=>{

   localStorage.removeItem('currentUser')
   localStorage.removeItem('cartItems')

   dispatch({type:'USER_LOGOUT'})

   window.location.href='/login'
}