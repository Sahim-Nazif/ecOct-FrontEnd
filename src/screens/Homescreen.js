import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import products from '../Products'


const Homescreen = () => {

    const [product, setProduct] = useState([])

    return (
        <div className='row justify-content-center'>
            {products.map(product => {

                return (<Product product={product} />
                )
            })}

        </div>
    )
}

export default Homescreen
