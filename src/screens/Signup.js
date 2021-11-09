import React,{useState} from 'react'

const Signup = () => {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')

    const signUp = (e)=>{

        e.preventDefault();

            const user={
                name:name,
                email:email,
                password:password
            }
            
        if (password ==confirmPassword) {
        } else {
            alert('Passwords do not match!')
        }
    
    }
    return (
            <div className='row container col-md-8 offset-md-2 mt-5'>
                 <div className='d-flex justify-content-center'>
                <div className='col-8 p-3 card'>
                 <h5 >Register</h5>  
            <form onSubmit={signUp}>
                
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
           
                <button className='mt-4 btn btn-dark' onClick={signUp}>
                    Sign up
                </button>

            </form>
            </div>
            </div>
            </div>
            )
    
    
}

export default Signup
