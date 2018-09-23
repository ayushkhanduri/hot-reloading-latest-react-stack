import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LoginUI from './presentational/Login/LoginUI';

const AppRouter = () =>(
    <Router>
        <Route exact path="/" component={LoginUI}/>
    </Router>
);

export default AppRouter;