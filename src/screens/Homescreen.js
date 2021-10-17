import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
//import products from '../Products'
import axios from 'axios'


const Homescreen = () => {

    const [products, setProducts]=useState([])


    useEffect(() => {
        axios.get('/api/product/all').then(response=>{
            console.log(response)
            setProducts(response.data)
        }).catch(error => {
            console.log(error)
        })
    },[])
    return (
            
        <div className='row justify-content-center'>
            {products.map((product,i)=>{
                 return (<Product product={product} key={i}/>
                 )
            })}
           
            {JSON.stringify(products)}
            
        </div>
    )
 
}

export default Homescreen
