import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Error from '../components/Error'
import Success from '../components/Success'
import Loader from '../components/Loader'
import {updateUser} from '../actions/userActions'


const Profilescreen = () => {

    const dispatch=useDispatch()
    const updateUserState=useSelector(state=>state.updateReducer)
    const loginState=useSelector(state=>state.loginReducer)

    const currentUser=loginState.currentUser
    const {error, success, loading}=updateUserState
    const [name, setName]=useState(currentUser.name)
    const [email, setEmail]=useState(currentUser.email)
    const [password, setPassword]=useState('')
    const [changePassword, setChangePassword]=useState('')


    const update=()=>{

        if (password==changePassword) {
            const updatedUser={
                name:name,
                email:email,
                password:password
            }
            dispatch(updateUser(currentUser._id, updatedUser))
        }else {
            alert('Passwords do not match')
        }
       
    }
    return (
        <div>
            <div className='row container col-md-8 offset-md-2 mt-5'>
                 <div className='d-flex justify-content-center'>
                <div className='col-8 p-3 card'>
                    {error && (<Error error='Please try again!'/>) }
                    {loading && (<Loader />)}
                    {success && (<Success success='You are all set!' />)}
                 <h5 >Register</h5>  
            <form onSubmit={update}>
                
                <div className='form-group p-2'>
                   
                    <input  type='text' placeholder='Name' required className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}
                    autoFocus/>
                </div>
             
                <div className='form-group p-2'>
            
                    <input  type='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
              
                <div className='form-group p-2'>
         
                    <input type='password' placeholder='Password' className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='form-group p-2'>
              
                    <input type='password' placeholder='Confirm Password' className='form-control' value={changePassword} onChange={(e)=>{setChangePassword(e.target.value)}}/>
                </div>
           
                <button className='mt-4 btn btn-dark' onClick={update}>
                    Update
                </button>

            </form>
            </div>
            </div>
            </div>
            
    
    
        </div>
    )
}

export default Profilescreen
