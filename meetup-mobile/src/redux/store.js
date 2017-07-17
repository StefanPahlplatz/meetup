import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import reducers from './reducers';

const middlewares = [
  promiseMiddleware(),
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); //eslint-disable-line

  middlewares.push(logger);
}

export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares), autoRehydrate()),
);
