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


export const getProductById=(id)=> async(dispatch)=>{

    dispatch({type:'GET_PRODUCTBYID_REQUEST'})


    await axios.post('/api/product/byId', {id}).then(response=>{
       
         dispatch({
                type:'GET_PRODUCTBYID_SUCCESS', 
                payload: response.data})
    }).catch(error => {
        console.log(error)
        dispatch({type:'GET_PRODUCTBYID_FAILED', payload:error})
    })

}