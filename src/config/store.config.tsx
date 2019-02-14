import {createStore,applyMiddleware, Store} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

import RootReducer from './index.reducer';

const middleWares: Array<any>= [
    createLogger(),
    thunkMiddleWare
];

export default function configureStore({initialState = {} }): Store{
    const store = createStore(RootReducer,initialState,applyMiddleware(...middleWares));
    if(module.hot){
        module.hot.accept('./index.reducer',()=>{
            const nextReducer = require('./index.reducer').default;
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}