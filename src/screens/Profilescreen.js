import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Profilescreen = () => {

    const update=()=>{


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
              
                    <input type='password' placeholder='Confirm Password' className='form-control' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                </div>
           
                <button className='mt-4 btn btn-dark' onClick={update}>
                    Update
                </button>

            </form>
            </div>
            </div>
            </div>
            )
    
    
        </div>
    )
}

export default Profilescreen
