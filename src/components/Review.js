import React, {useState, useEffect} from 'react'
import Rating from 'react-rating'
import {useDispatch, useSelector} from 'react-redux'
import {addProductReview} from '../actions/productActions'


const Review = ({product}) => {

    const dispatch = useDispatch()
    const [rating, setRating]=useState(5)
    const [comment, setComment]= useState('')

    const submitRating =()=>{

    const currentUser=JSON.parse(localStorage.getItem('currentUser'))

    let alreadyReview;
    for(let i=0; i<product.reviews.length; i++) {
        if (product.reviews[i].userid==currentUser._id) {
            alreadyReview=true
        }
    }
    if (alreadyReview) {
        alert('You have already reviewed this product')
    }else {
        const review={
            rating:rating,
            comment:comment
        }
 
        dispatch(addProductReview(review, product._id ))
     }
    }
    
     
    return (
        <div>
            <h6>Rate this item</h6>
            <Rating

                initialRating={rating}
                onChange={(e)=>{setRating(e)}}

            />
            <input type="text" className='form-control mt-2' value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
            <button className='btn btn-dark mt-3' onClick={()=>submitRating()}>Submit</button>
            <h5>Recent Ratings</h5>
            <hr/>
            {product.reviews &&(product.reviews.map(reviews=>{
                return (
                    <>
                 
                   <Rating

                   initialRating={reviews.rating}
                   readonly
   
               />
         
               <p>{reviews.comment}</p>  
               <p>{reviews.name}</p>
             
               </>
              
              )
            }))}
            
        </div>
    )
}

export default Review
