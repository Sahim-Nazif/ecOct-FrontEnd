import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const Checkout = ({amount}) => {

    const tokenHandler = (token) => {

        console.log(token)
    }
    return (
        <div>
            <StripeCheckout token={tokenHandler}
            shippingAddress billingAddress
            
            amount={amount *100} stripeKey='pk_test_51K1Ks4C6vhyiTSQa44WqNH1nJaobtRa02WW2YnaeKcQXXxROGHDOnGIcFXFwcqflRJ7zd8FLqQITgC7eBCk4my7c00Dmeq4m1U'>
                <button className='btn btn-dark btn-sm mt-4'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
