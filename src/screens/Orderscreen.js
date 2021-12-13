import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOrderByUserId } from '../actions/orderActions'


const Orderscreen = () => {


    const dispatch=useDispatch()

    useEffect(()=>{

        if (localStorage.getItem('currentUser')) {
            dispatch(getOrderByUserId())
        }else {
            window.location.href='/login'
        }

    })


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
