import React, {useState, useEffect}  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getOrderById } from '../actions/orderActions'
import Error from '../components/Error'

const Orderinfo = ({match}) => {

    const orderState=useSelector(state=>state.getOrderByIdReducer)
    const dispatch=useDispatch()
    const {orders, loading, error}=orderState

    useEffect(() => {

        dispatch(getOrderById(match.params.orderid))
    },[dispatch])

    return (
        <div>
            {JSON.stringify(orders)}
        </div>
    )
}

export default Orderinfo
