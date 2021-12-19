import React, {useState, useEffect}  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getOrderById } from '../actions/orderActions'


const Orderinfo = ({match}) => {

    const dispatch=useDispatch()

    useEffect(() => {

        dispatch(getOrderById(match.params.orderid))
    },[])

    return (
        <div>
            <h1>{match.params.orderid}</h1>
           
        </div>
    )
}

export default Orderinfo
