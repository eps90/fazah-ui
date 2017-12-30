import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import sagas from './store/sagas';

import 'grommet/scss/vanilla/index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
