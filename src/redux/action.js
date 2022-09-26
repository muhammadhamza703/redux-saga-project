import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'


// multiple actions 
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    };
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    };
}

export const emptyCart = (data) => {
    console.log("action", data)
    return {
        type: EMPTY_CART
    };
}
