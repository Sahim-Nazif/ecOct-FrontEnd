import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../actions/userActions'


const Loginscreen = () => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
   

    const dispatch=useDispatch()

    const login = (e)=>{

        e.preventDefault();

            const user={
                email:email,
                password:password
            }
            dispatch(loginAction(user))
         
    }

    useEffect(()=>{

        if (localStorage.getItem('currentUser')) {
            window.location.href='/'
        }
    },[])
    return (
            <div className='row container col-md-8 offset-md-2 mt-5'>
                 <div className='d-flex justify-content-center'>
                <div className='col-8 p-3 card'>
                 <h5 >Sign In</h5>  
            <form onSubmit={login}>
                           
                <div className='form-group p-2'>
            
                    <input  type='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
              
                <div className='form-group p-2'>
         
                    <input type='password' placeholder='Password' className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
             
                <div className="d-flex signupLink justify-content-start">
                <a className='mt-4 link' style={{textDecoration:'none'}} href='/signup'>Sign Up</a>
                
               
                </div>
                <div className="d-flex justify-content-end">
                <button className='loginButton btn btn-dark' onClick={login}>
                    Login
                </button>
                </div>
         
            </form>
            </div>
            </div>
            </div>
            )
    
}

export default Loginscreen
