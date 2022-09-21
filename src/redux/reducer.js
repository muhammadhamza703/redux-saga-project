import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'


// Add, Update, Delete Data
export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log(action)
            data.length = data.length ? data.length - 1 : []
            return [...data]
        case EMPTY_CART:
            console.log(action)
            data = []
            return [...data]
        default:
            return data
    }
}