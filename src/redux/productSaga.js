import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

function* getProducts(){
    // let data
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    console.log("action", data)
    yield put({ type:SET_PRODUCT_LIST, data })
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;