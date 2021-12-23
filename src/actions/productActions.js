import axios  from "axios"

export const getAllProducts=()=> async(dispatch)=>{

    dispatch({type:'GET_PRODUCTS_REQUEST'})


    await axios.get('/api/product/all').then(response=>{
       
         dispatch({
                type:'GET_PRODUCTS_SUCCESS', 
                payload: response.data})
    }).catch(error => {
        console.log(error)
        dispatch({type:'GET_PRODUCTS_FAILED', payload:error})
    })

}


export const getProductById=(productId)=> async(dispatch)=>{

    dispatch({type:'GET_PRODUCTBYID_REQUEST'})


    await axios.post('/api/product/byId', {productId}).then(response=>{
       
         dispatch({
                type:'GET_PRODUCTBYID_SUCCESS', 
                payload: response.data})
    }).catch(error => {
        console.log(error)
        dispatch({type:'GET_PRODUCTBYID_FAILED', payload:error})
    })

}

export const filterProducts=(searchKey, sortKey, category)=>dispatch=>{

    let filteredProducts;
    dispatch ({type:'GET_PRODUCTS_REQUEST'})

 axios.get('/api/product/all').then(response=>{

    filteredProducts=response.data
        if (searchKey){
            filteredProducts=response.data.filter(product=>{
                return product.name.toLowerCase().includes(searchKey)
            })
        } 
        if (sortKey !='popular') {
            if (sortKey=='htl') {
                filteredProducts =response.data.sort((a, b)=>{
                    return -a.price + b.price
                })
            }
             else {
                filteredProducts=response.data.sort((a, b)=>{
                    return a.price - b.price
                })
             }
        }
        if (category !='all') {
            filteredProducts=response.data.filter(product=>{
                return product.category.toLowerCase().includes(category)
            })
        }
        dispatch({type:'GET_PRODUCTS_SUCCESS',payload:filteredProducts})

    }).catch(error=>{
        dispatch({type:'GET_PRODUCTS_FAILED'})
    })
}

export const addProductReview=(review, productid)=>(dispatch,getState)=>{

    dispatch({type:'ADD_PRODUCT_REVIEW_REQUEST'})
    const currentUser=getState().loginReducer.currentUser

    axios.post('/api/product/addreview', {review, productid, currentUser}).then(res=>{
        
        dispatch({type:'ADD_PRODUCT_REVIEW_SUCCESS'})
    }).catch(err=>{
        dispatch({type:'ADD_PRODUCT_REVIEW_FAILED'})
    })
}