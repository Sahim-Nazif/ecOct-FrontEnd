import React, {useState, useEffect}  from 'react'
import {useDispatch,useSelector} from 'react-redux'


const Orderinfo = ({match}) => {

    const dispatch=useDispatch()

    useEffect(() => {

        dispatch(getOrderById())
    },[])

    return (
        <div>
            <h1>{match.params.orderid}</h1>
           
        </div>
    )
}

export default Orderinfo
