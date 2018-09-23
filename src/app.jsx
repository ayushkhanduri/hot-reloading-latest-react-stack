import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';


ReactDOM.render(<AppRouter/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./router.jsx',()=>{
        const AppRouter = require('./router.jsx').default;
        ReactDOM.render(<AppRouter/>,document.getElementById('app'));
    });
}