import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
//import products from '../Products'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Filter from '../components/Filter'



const Homescreen = () => {

    const getAllProductsState=useSelector(state=>state.getAllProductReducer)
    const {loading,products, error}=getAllProductsState
    const dispatch= useDispatch()
   
    useEffect(() => {

        dispatch(getAllProducts())
        
    },[dispatch])
    return (
        <div>
        <Filter/>
        <div className='row justify-content-center'>
        
            {loading ? (<Loader/>):error ? (<Error error='Sorry No Data Available'/>)

                :( products.map((product,i)=>{
                    return <Product product={product} key={i}/>
                }))
            }
            
        </div>
        </div>
    )
 
}

export default Homescreen
