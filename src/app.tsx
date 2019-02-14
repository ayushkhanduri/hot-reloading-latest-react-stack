import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./AppRouter.tsx',()=>{
        const AppRouter = require('./AppRouter.tsx').default;
        ReactDOM.render(<AppRouter/>,document.getElementById('app'));
    });
}