import reducer from '../reducers/RootReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(...middlewares)
      : require('redux-devtools-extension').composeWithDevTools(
          applyMiddleware(...middlewares)
        )
  );

export default configureStore;
