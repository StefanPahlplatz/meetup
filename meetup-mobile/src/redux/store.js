import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [
  promiseMiddleware(),
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); //eslint-disable-line

  middlewares.push(logger);
}

const enhancers = window.__REDUX_DEVTOOLS_EXTIONSION_COMPOSE__ || compose; //eslint-disable-line

export default createStore(
  reducers,
  undefined,
  enhancers(applyMiddleware(...middlewares)),
);
