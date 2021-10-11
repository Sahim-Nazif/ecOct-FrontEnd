import React from 'react'
import {Link} from 'react-router-dom'


const Product = ({ product }) => {
    return (

        <div className="col-md-3 m-5 card p-2">
            <div class="card-body">
                <Link className='links' to={`product/${product.id}`}>
                <img src={product.image} className='img-fluid' />
                <h6 className='card-title mt-4'>{product.name}</h6>
                <p>Rating: {product.rating}</p>
                <p>Price: ${product.price}</p>
                </Link>
            </div>

        </div>
    )
}

export default Product
