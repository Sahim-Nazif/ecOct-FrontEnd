import React from 'react'
import products from '../Products'


const Productdescscreen = ({ match }) => {

    const productid = match.params.id;
    const product = products.find(product => product.id == productid)
    return (
        <>
            <h2 className='mt-5'>Product Details</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card p-5 m-2'>
                        <h5>{product.name}</h5>
                        <img src={product.image} className='img-fluid m-3 proImage' />
                        <p className='produDes'>{product.description}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='m-2'>
                        <h6>Price: ${product.price}</h6>
                        <hr/>
                        <h6>Select Quanity:</h6>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Productdescscreen
