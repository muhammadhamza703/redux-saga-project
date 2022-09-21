// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMddleware from 'redux-saga';

// const store = createStore(rootReducer)
const sagaMiddleware = createSagaMddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga);

export default store;