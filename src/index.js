import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/reducers";
import sagas from "./store/sagas";
import createHistory from "history/createBrowserHistory";
import {ConnectedRouter, routerMiddleware as createRouterMiddleware} from "react-router-redux";

import "semantic-ui-css/semantic.css";

const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware, routerMiddleware)
    )
);
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
