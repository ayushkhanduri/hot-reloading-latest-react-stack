import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppRouter from './AppRouter';
// import 'antd/dist/antd.css';

ReactDOM.render(<AppRouter/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./AppRouter.tsx',()=>{
        console.log("Asdasd");
        const AppRouter = require('./AppRouter.tsx').default;
        ReactDOM.render(<AppRouter/>,document.getElementById('app'));
    });
}