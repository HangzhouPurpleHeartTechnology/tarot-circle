import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
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
    if (user.exp <= Date.now() / 1000) store.dispatch(actionSignout());
    else store = configureStore({ session: { isAuthenticated: true, user } });
  }
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
});
