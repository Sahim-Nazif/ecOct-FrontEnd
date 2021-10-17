import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'


const Product = ({ product }) => {
    return (

        <div className="col-md-3 m-3 card p-2 ">
            <div className="card-body" >
                <Link className='links' to={`product/${product.id}`}>
                    <img src={product.image} className='img-fluid' />
                    <div className='text-start'>
                    <h6 className='card-title mt-4'>{product.name}</h6>
                    
                    <Rating
                         
                     initialRating={product.rating}
                     readonly/>     
                   <p>Price: ${product.price}</p>
                   </div>
                </Link>
               
            </div>

        </div>
    )
}

export default Product
