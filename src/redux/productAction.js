import { PRODUCT_LIST,SET_PRODUCT_LIST } from './constant'

export const productList = () => {

    return {
        type: PRODUCT_LIST,
    };
}

// export const setProductList = (data) => {

//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     };
// }