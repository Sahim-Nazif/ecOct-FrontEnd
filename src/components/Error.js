import React from 'react'

const Error = ({error}) => {
    return (
        <div>
            <div className="alert alert-danger mt-5 sm" role="alert">
                {error}
            </div>
        </div>
    )
}

export default Error
