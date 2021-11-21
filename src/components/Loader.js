
import React from 'react'

const Loader = () => {
    return (
        <div className='mt-5'>
        <div className="spinner-border mt-5" role="status" style={{height:'100px',width:'100px'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    )
}

export default Loader