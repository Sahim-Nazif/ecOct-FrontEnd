import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import {placeOrder} from '../actions/orderActions'
import Loader from '../components/Loader'
import Success from '../components/Success'
import Error from '../components/Error'

const Checkout = ({amount}) => {

    const dispatch = useDispatch()
    const orderState=useSelector(state=>state.placeOrderReducer)

    const {loading, success, error}=orderState

    const tokenHandler = (token) => {

        dispatch(placeOrder(token, amount))
    }
    return (
        <div>
            {loading && (<Loader/>)}
            {success && (<Success success='Order was placed successfully'/>)}
            {error &&(<Error  error='Something went wrong'/>)}
            <StripeCheckout token={tokenHandler}
            shippingAddress billingAddress
            
            amount={amount *100} stripeKey='pk_test_51K1Ks4C6vhyiTSQa44WqNH1nJaobtRa02WW2YnaeKcQXXxROGHDOnGIcFXFwcqflRJ7zd8FLqQITgC7eBCk4my7c00Dmeq4m1U'>
                <button className='btn btn-dark btn-sm mt-4'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
