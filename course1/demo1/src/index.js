import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider}  from 'react-redux';
import {Redirect, Route, Link, BrowserRouter} from 'react-router-dom';

import BossInfo  from './container/bossInfo/bossInfo';
import AuthRoute from './component/authroute/authroute';
import Login from './container/login/login';
import Register from './container/register/register';
import reducers from './reducers';
import './config';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f   
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/bossinfo' component={BossInfo}> </Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
    );


