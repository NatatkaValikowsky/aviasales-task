import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from './reducers';
import App from './components/app';

const middlewares = [thunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));