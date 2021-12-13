import React from 'react'

const Orderscreen = () => {


    return (
        <div >
            <div className='row justify-content-center mt-5'>
                <div className='col-md-8'>
                    <h2>My Orders</h2>
                    <table className='table table-bordered mt-4'>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Orderscreen
