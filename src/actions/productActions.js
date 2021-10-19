import axios  from "axios"

export const getAllProducts=()=> async(dispatch)=>{

    dispatch({type:'GET_PRODUCTS_REQUEST'})


    await axios.get('/api/product/all').then(response=>{
        console.log(response)
         dispatch({type:'GET_PRODUCTS_SUCCESS', playload: response.data})
    }).catch(error => {
        console.log(error)
        dispatch({type:'GET_PRODUCTS_FAILD', playload:error})
    })

}