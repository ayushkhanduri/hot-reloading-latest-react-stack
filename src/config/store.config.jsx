import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

import RootReducer from './index.reducer';

const middleWares= [
    createLogger(),
    thunkMiddleWare
];

export default function configureStore({initialState}){
    const store = createStore(RootReducer,initialState,applyMiddleware(...middleWares));
    if(module.hot){
        module.hot.accept('./index.reducer',()=>{
            const nextReducer = require('./index.reducer').default;
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}