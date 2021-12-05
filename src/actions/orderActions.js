import axios from 'axios'


export const placeOrder=(token, cartTotal)=>(dispatch, getState)=>{

    const currentUser=getState().loginReducer.currentUser
    const cartItems=getState().cartReducer.cartItems

    dispatch({type:'PLACE_ORDER_REQUEST'})

    axios.post('/api/orders/placeOrder', {token, cartTotal, currentUser, cartItems}).then(res=>{
        dispatch({type:'PLACE_ORDER_SUCCESS'})
      
    }).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })
}