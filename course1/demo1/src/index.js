import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider}  from 'react-redux';
import {Redirect, Route, Link, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {counter} from './index.redux';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f   
));

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Link to='/app'>App</Link><br/>
                    <Link to='/path1'>path1</Link><br/>
                    <Link to='/path2'>path2</Link><br/>
                    <Redirect to='/app'> </Redirect>
                    <Route path='/app' component={App}></Route>
                    <Route path='/path1' component={() => <div>path1</div>}></Route>
                    <Route path='/path2' component={() => <div>path2</div>}></Route>
                </div>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
    registerServiceWorker();


