import React from 'react'
import {useState, useDispatch, useSelector} from 'react-redux'


const Cartscreen = () => {

    const cartReducerState= useSelector(state => state.addToCartReducer)
    const {cartItems}= cartReducerState
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
                            <th>Count</th>
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
                                            <select>
                                                {[...Array(item.countInStock).keys()].map((x, i)=>{
                                                    return (
                                                        <option value={i+1}>
                                                            {i+1}
                                                        </option>    

                                                    ) 
                                                })}
                                            </select>
                                        </td>
                                        
                                        <td>${item.price * item.quantity}</td>
                                        <td>{item.countInStock}</td>
                                         <td><i class="fas fa-trash"></i></td>
                                     </tr>   
                                     
                                    )
                                    
                                })}
                        </tbody>
                      
                    </table>

                </div>
           
           </div>
        </div>
    )
}

export default Cartscreen
