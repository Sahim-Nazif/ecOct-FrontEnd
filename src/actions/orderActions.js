import axios from 'axios'


export const placeOrder=(token, cartTotal)=>(dispatch, getState)=>{

    const currentUser=getState().loginReducer.currentUser
    const cartItems=getState().cartReducer.cartItems

    const newItems= new Array()
    
    for(let i =0 ; i<cartItems.length;i++) {

        var items={
            name:cartItems[i].name,
            quantity:cartItems[i].quantity,
            price:cartItems[i].price,
            _id:cartItems[i]._id
        }

        newItems.push(items)
    }
    dispatch({type:'PLACE_ORDER_REQUEST'})

    axios.post('/api/orders/placeOrder', {token, cartTotal, currentUser, cartItems}).then(res=>{
        dispatch({type:'PLACE_ORDER_SUCCESS'})
      
    }).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })
}

export const getOrderByUserId=()=>{
    
    dispatch({type:'GET_ORDERSBYUSERID_REQUEST'})

    axios.post('/api/orders/getordersbyUserid').then(res=>{
        dispatch({type:'GET_ORDERSBYUSERID_SUCCESS', payload:res.data})
    }).catch(err=>{
        dispatch({type:'GET_ORDERSBYUSERID_FAILED', payload:err})
    })


}