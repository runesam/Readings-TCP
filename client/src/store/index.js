/* global __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: true */
import { compose, createStore } from 'redux';

import middleware, { history } from 'middleware';
import rootReducer from 'reducers';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default createStore(
    rootReducer(history),
    {},
    composeEnhancers(middleware),
);
