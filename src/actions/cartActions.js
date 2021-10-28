export const addToCart=(product, quantity)=>(dispatch, getState)=>{

    const cartItems={

        name:product.name,
        _id:product._id,
        price:product.price,
        inStock:product.countInStock,
        quantity:quantity
    }

    dispatch({type:'ADD_TO_CART', payload:cartItems})

    localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}