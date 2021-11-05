import React from 'react'
import {useState, useDispatch, useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'

const Cartscreen = () => {

    const cartReducerState= useSelector(state => state.cartReducer)

    const dispatch=useDispatch()

     const {cartItems}= cartReducerState

    let cartTotal=cartItems.reduce((acc, item)=>acc + (item.price*item.quantity),0)
    return (
        <div>
           <div className='row mt-3 justify-content-center'>
                <div className='col-md-8'>
                    <h3 className='m-4'>My Cart </h3>
                    <table className='table table-bordered '>
                  
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item,e.target.value))}}>
                                                {[...Array(item.countInStock).keys()].map((x, i)=>{
                                                    return (
                                                        <option key={x + 1} value={i+1}>
                                                            {i+1}
                                                        </option>    

                                                    ) 
                                                })}
                                            </select>
                                        </td>
                                        
                                        <td>${item.price * item.quantity}</td>
                                       <td><i className="fas fa-trash" onClick={()=>dispatch(deleteFromCart(item))}></i></td>
                                     </tr>   
                                     
                                    )
                                    
                                })}
                               
                        </tbody>
                      
                    </table>

                </div>
          
           </div>
           <h4>Cart Total: $ {cartTotal}</h4>
        </div>
    )
}

export default Cartscreen
