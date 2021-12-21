import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../actions/orderActions'
import Error from '../components/Error'
import Loader from '../components/Loader'

const Orderinfo = ({ match }) => {

    const orderState = useSelector(state => state.getOrderByIdReducer)
    const dispatch = useDispatch()
    const { orders, loading, error } = orderState

    useEffect(() => {

        dispatch(getOrderById(match.params.orderid))
    }, [dispatch])

    return (
        <div>
            {error && (<Error error='Something went wrong' />)}
            {loading && (<Loader />)}
            {orders && (<div>
                <div className='row '>
                    <div className='col-md-5 mt-3 card ms-4'>
                        <h5 className='mt-4 text-success'>Items In Your Order</h5>
                        {orders.orderItems.map(item => {
                            return (
                                <div className='ms-n2'>

                                    <p className="list-group-item">Product name: {item.name}</p>
                                    <p className="list-group-item">Quantity: {item.quantity}</p>
                                    <p className="list-group-item">Price: ${item.price}</p>
                                    <p className="list-group-item">Total :{item.quantity * item.price}</p>


                                </div>
                            )

                        })}
                    </div>
                    <div className='col-md-5 mt-3 card'>
                        <h5 className='mt-4 text-success'>Order Details</h5>
                        <p className="list-group-item">Order Id: {orders._id}</p>
                        <p className="list-group-item">Total Amount: ${orders.orderAmount}</p>
                        <p className="list-group-item">Date: {orders.createdAt.substring(0,10)}</p>
                        <p className="list-group-item">Transaction Id: {orders.transactionId}</p>
                        {orders.isDelivered ? <p className="list-group-item">Delivered</p> : <p className="list-group-item">Order Placed</p>}

                        <div>
                        <h5 className='mt-4 text-success'>Shipping Details</h5>
                        <p className="list-group-item">Shipping Address: {orders.shippingAddress.address}</p>
                        <p className="list-group-item">City: {orders.shippingAddress.city}</p>
                        <p className="list-group-item">Postal Code: {orders.shippingAddress.postalCode}</p>
                        <p className="list-group-item">Country: {orders.shippingAddress.country}</p>
                            </div>
                    </div>
                </div>


            </div>)}
         
        </div>
    )
}

export default Orderinfo
