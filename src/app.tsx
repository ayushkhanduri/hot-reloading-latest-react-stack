import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'antd';


import AppRouter from './AppRouter';
import './app.css';

ReactDOM.render(<Button type="primary"> Primary</Button>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./AppRouter.tsx',()=>{
        console.log("Asdasd");
        const AppRouter = require('./AppRouter.tsx').default;
        ReactDOM.render(<Button type="primary"> Primary</Button>,document.getElementById('app'));
    });
}