import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
//import products from '../Products'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProducts} from '../actions/productActions'

const Homescreen = () => {

    const getAllProductsState=useSelector(state=>state.getAllProductReducer)
    const {loading,products, error}=getAllProductsState
    const dispatch= useDispatch()
   
    useEffect(() => {

        dispatch(getAllProducts())
        
    },[dispatch])
    return (
            
        <div className='row justify-content-center'>
         
            {loading ? (<div>  <i className="fas fa-circle-notch fa-spin fa-4x"></i>
                            <span class="sr-only">Loading...</span>
                        
                        </div>):error ? (<h2>Sorry No Data Available</h2>)

                :( products.map((product,i)=>{
                    return <Product product={product} key={i}/>
                }))
            }
            
        </div>
    )
 
}

export default Homescreen
