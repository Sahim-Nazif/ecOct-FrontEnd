
export const getAllProductReducer=(state={products:[]}, action)=>{


    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return {loading:true, }
    
        case 'GET_PRODUCTS_SUCCESS':
            return {loading:false, products:action.payload}

        case 'GET_PRODUCTS_FAILED':
            return {loading:false, error:action.payload}
        
        default: 
            return state
        }

}

export const getProductByIdReducer=(state={product:[]}, action)=>{


    switch (action.type) {
        case 'GET_PRODUCTBYID_REQUEST':
            return {loading:true, }
    
        case 'GET_PRODUCTBYID_SUCCESS':
            return {loading:false, product:action.payload}

        case 'GET_PRODUCTBYID_FAILED':
            return {loading:false, error:action.payload}
        
        default: 
            return state
        }

}

export const addProductReviewReducer=(state={}, action)=>{

    switch(action.type) {

        case 'ADD_PRODUCT_REVIEW_REQUEST':
            return {loading:true}
        
        case 'ADD_PRODUCT_REVIEW_SUCCESS':
            return {loading:false, 
                    success:true}
        case 'ADD_PRODUCT_REVIEW_FAILED':
            return {loading:false,
                    error:true}
        
        default: 
            return state
        
    }
}