export const addToCart=(product, quantity)=>dispatch=>{

    const cartItems={

        name:product.name,
        _id:product._id,
        price:product.price,
        inStock:product.countInStock,
        quantity:quantity
    }

    dispatch({type:'ADD_TO_CART', payload:cartItems})
}