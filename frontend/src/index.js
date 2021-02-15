import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import configureStore from './store/ConfigureStore';
import { actionSignout } from './actions/SessionActions';
import jwt_decode from 'jwt-decode';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const token = localStorage.jwtToken;
  if (!token) store = configureStore({});
  else {
    const user = jwt_decode(token);
    console.log('token', token);
    store = configureStore({ session: { isAuthenticated: true, user } });
    if (user.exp <= Date.now() / 1000) store.dispatch(actionSignout());
  }
  ReactDOM.render(
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  reportWebVitals();
});
