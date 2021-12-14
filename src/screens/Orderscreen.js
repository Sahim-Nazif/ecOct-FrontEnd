import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOrderByUserId } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'


const Orderscreen = () => {

    const getOrderByUserIdState=useSelector(state=>state.getOrdersByUserId)
    const {orders, error, loading}=getOrderByUserIdState
    const dispatch=useDispatch()

    useEffect(()=>{

        if (localStorage.getItem('currentUser')) {
            dispatch(getOrderByUserId())
        }else {
            window.location.href='/login'
        }

    },[])


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
                        <tbody>
                            {(orders) ? orders.map((order, index)=>{
                                    return (
                                        <tr key={index}>
                                        <td>{order._id }</td>
                                         <td>${order.orderAmount}</td>
                                        <td>{new Date(order.createdAt).toDateString()}</td>
                                        <td>{order.transactionId }</td>  
                                        <td>{order.isDelivered ?(<p>Delivered</p>):<p>Order Placed</p> }</td>
                                        </tr>
                                  )
                            }):<Loader/> ? <Error/>:<p>none</p>}
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    )
}

export default Orderscreen
