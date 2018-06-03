import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
//Views
import App from './App';
//Browser
import { BrowserRouter } from 'react-router-dom'
//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer/root'

const store = createStore(rootReducer)

ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
