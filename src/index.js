import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/reducers";
import sagas from "./store/sagas";
import {BrowserRouter as Router} from "react-router-dom";

import "semantic-ui-css/semantic.css";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
