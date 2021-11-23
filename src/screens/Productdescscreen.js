import React, {useState, useEffect} from 'react'
import products from '../Products'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';
import {addToCart} from '../actions/cartActions'
import Loader from '../components/Loader'

const Productdescscreen = ({ match }) => {

    const productid = match.params.id;
    const dispatch=useDispatch()

    const[quantity, setQuantity]=useState(1);

    const getProdudctByState=useSelector(state=>state.getProductByIdReducer)

    const {product, loading, error}=getProdudctByState

   const handleChange=quantity=>event=>{

        setQuantity(event.target.value)
   }
    const handleAddtoCart=()=>{
       
        dispatch(addToCart(product, quantity))
    }
    
   // const product = products.find(product => product.id === productid)

    useEffect(()=>{

            dispatch(getProductById(productid))
    },[])

    return (
        <>
        
            {loading ? (<Loader/>) : error ? (<h2>Looks like there is an error</h2>) :(
                 <div>
                 <h2 className='mt-5'>Product Details</h2>
                 <div className='row'>
                     <div className='col-md-6'>
                         <div className='card p-2 m-3'>
                             <h5>{product.name}</h5>
                             <img src={product.image} className='img-fluid m-3 proImage' />
                             <p className='produDes'>{product.description}</p>
                         </div>
                     </div>
                     <div className="col-md-6 text-start">
                         <div className='m-2'>
                             <h6>Price: ${product.price}</h6>
                             <hr/>
                             <h6 >Select Quanity:</h6>
                             <select value={quantity} onChange={handleChange()}>
                             {[...Array(product.countInStock).keys()].map((product, index)=>{
     
                                 return <option value={index+1}>{index+1}</option>
                             })}
                             </select>
                             {product.countInStock<=1 ? 
                             (<p className='fs-6 text-danger'>Low stock</p>) : product.countInStock<=2 ?
                             (<p className='fs-6 text-danger'>Almost gone</p>)
                             :(<p className='fs-6 text-success'>{product.countInStock} in stock</p>)}
                             <hr/>
                             <button className='btn btn-dark text-uppercase' onClick={handleAddtoCart}>add to cart</button>
                         </div>
                     </div>
                 </div>
                 </div>
            ) }
        
        </>

    )
}

export default Productdescscreen
