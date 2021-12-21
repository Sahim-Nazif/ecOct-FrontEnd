import React, {useState, useEffect} from 'react'
import Rating from 'react-rating'

const Review = () => {
    const [rating, setRating]=useState(5)
    const [comment, setComment]= useState('')

    const submitRating =()=>{

        alert (rating + comment )
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
        </div>
    )
}

export default Review
