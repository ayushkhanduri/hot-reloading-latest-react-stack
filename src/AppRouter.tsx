import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

// import LoginUI from './presentational/Login/LoginUI';
import Card from './components/Card/Card.component';
// import Counter from './components/Counter/Counter.component';

import createStore from './config/store.config';

import './app.css';

const AppRouter = () =>(
    <Provider store={createStore({initialState:{}})}>
        <Router>
            <div className="main-container">
                <Route exact path='/' component={Card}/>
            </div>
        </Router>
    </Provider>
);

export default AppRouter;